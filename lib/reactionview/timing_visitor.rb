# frozen_string_literal: true

module ReActionView
  class TimingVisitor < Herb::Visitor
    def initialize(file_path: nil)
      super()
      @filename = case file_path
                  when ::Pathname
                    file_path
                  when String
                    file_path.empty? ? nil : ::Pathname.new(file_path)
                  end
      @fullpath = @filename&.to_s || "unknown"
      @stats = ActiveRecord::RuntimeRegistry.respond_to?(:stats) ? ".stats" : ""
    end

    def visit_document_node(node)
      inject_timing_start(node)
      super
      inject_timing_end(node)
    end

    def inject_timing_start(document_node)
      document_node.children.unshift create_erb_code_node("__reactionview_timing_start = Process.clock_gettime(Process::CLOCK_MONOTONIC)")
      document_node.children.unshift create_erb_code_node("__reactionview_queries_count_start = ActiveRecord::RuntimeRegistry#{@stats}.queries_count")
      document_node.children.unshift create_erb_code_node("__reactionview_cached_queries_count_start = ActiveRecord::RuntimeRegistry#{@stats}.cached_queries_count")
    end

    def inject_timing_end(document_node) # rubocop:disable Metrics/MethodLength
      html = document_node.children.find { |child| child.is_a?(Herb::AST::HTMLElementNode) && child.tag_name&.value&.downcase == "html" }
      body = html&.child_nodes&.find { |child| child.is_a?(Herb::AST::HTMLElementNode) && child.tag_name&.value&.downcase == "body" }
      target_node = body || document_node
      children = target_node.is_a?(Herb::AST::HTMLElementNode) ? target_node.body : target_node.children

      children << create_erb_code_node("__reactionview_timing_end = Process.clock_gettime(Process::CLOCK_MONOTONIC)")
      children << create_erb_code_node("__reactionview_timing_ms = ((__reactionview_timing_end - __reactionview_timing_start) * 1000).round(2)")

      children << create_erb_code_node("__reactionview_queries_count_end = ActiveRecord::RuntimeRegistry#{@stats}.queries_count")
      children << create_erb_code_node("__reactionview_queries_count = (__reactionview_queries_count_end - __reactionview_queries_count_start)")

      children << create_erb_code_node("__reactionview_cached_queries_count_end = ActiveRecord::RuntimeRegistry#{@stats}.cached_queries_count")
      children << create_erb_code_node("__reactionview_cached_queries_count = (__reactionview_cached_queries_count_end - __reactionview_cached_queries_count_start)") # rubocop:disable Layout/LineLength

      ruby_code = <<~RUBY
        javascript_tag(data: {
          herb_timing_duration: __reactionview_timing_ms,
          herb_queries_count: __reactionview_queries_count,
          herb_cached_queries_count: __reactionview_cached_queries_count,
          herb_target_debug_file_full_path: "#{@fullpath}",
        } ) do
      RUBY
      js_code = <<~JS
        (() => {
          const fullPath = document.currentScript.dataset.herbTargetDebugFileFullPath;
          const targetElm = document.querySelector(`[data-herb-debug-outline-type~="view"][data-herb-debug-file-full-path="${fullPath}"]`) ||
                            document.querySelector(`[data-herb-debug-outline-type~="partial"][data-herb-debug-file-full-path="${fullPath}"]`);
          if (targetElm) {
            const timingDuration = document.currentScript.dataset.herbTimingDuration;
            const queriesCount = document.currentScript.dataset.herbQueriesCount;
            const cachedQueriesCount = document.currentScript.dataset.herbCachedQueriesCount;
            targetElm.dataset.herbDebugFileName += ` (${timingDuration} ms, ${queriesCount} queries, ${cachedQueriesCount} cached)`;
          }
        })();
      JS
      children << create_erb_block_node(ruby_code, js_code)
    end

    def create_erb_content_node(ruby_code, tag_opening)
      tag_opening = create_token(:erb_tag_opening, tag_opening)
      content = create_token(:erb_content, " #{ruby_code} ")
      tag_closing = create_token(:erb_tag_closing, "%>")
      Herb::AST::ERBContentNode.new("ERBContentNode", dummy_location, [], tag_opening, content, tag_closing, nil, true, true)
    end

    def create_erb_block_node(ruby_code, text_content)
      html_text_node = Herb::AST::HTMLTextNode.new("HTMLTextNode", dummy_location, [], +text_content)
      erb_end_node = Herb::AST::ERBEndNode.new("ERBEndNode", dummy_location, [], create_token(:erb_tag_opening, "<%"),
                                               create_token(:erb_content, " end "), create_token(:erb_tag_closing, "%>"))
      Herb::AST::ERBBlockNode.new("ERBBlockNode", dummy_location, [], create_token(:erb_tag_opening, "<%="),
                                  create_token(:erb_content, " #{ruby_code} "), create_token(:erb_tag_closing, "%>"),
                                  [html_text_node], erb_end_node)
    end

    def create_erb_code_node(ruby_code) = create_erb_content_node(ruby_code, "<%")
    def create_erb_output_node(ruby_code) = create_erb_content_node(ruby_code, "<%=")
    def create_token(type, value) = Herb::Token.new(value.dup, dummy_range, dummy_location, type.to_s)
    def dummy_location = @dummy_location ||= Herb::Location.from(0, 0, 0, 0)
    def dummy_range = @dummy_range ||= Herb::Range.from(0, 0)
  end
end

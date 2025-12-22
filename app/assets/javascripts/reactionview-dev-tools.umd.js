(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReActionViewDevTools = {}));
})(this, (function (exports) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".herb-overlay-label{background:rgba(0,0,0,.8);border-radius:3px;color:#fff;cursor:pointer;display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,monospace;font-size:11px;font-weight:500;left:4px;line-height:1.2;padding:2px 6px;position:absolute;top:-18px;transition:all .2s ease;white-space:nowrap;z-index:1000}.herb-overlay-label:hover{background:rgba(0,0,0,.9);color:#374151;transform:scale(1.02);z-index:1001}[data-herb-debug-outline-type*=view]>.herb-overlay-label{background:#dbeafe;border-color:#93c5fd;color:#1e40af}[data-herb-debug-outline-type*=partial]>.herb-overlay-label{background:#d1fae5;border-color:#6ee7b7;color:#065f46}[data-herb-debug-outline-type*=component]>.herb-overlay-label{background:#fef3c7;border-color:#fcd34d;color:#92400e}[data-herb-debug-outline-type*=erb-output]{transition:all .3s ease}.herb-tooltip{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.12),0 2px 8px rgba(0,0,0,.08);display:flex;flex-direction:column;font-family:SF Mono,Monaco,Inconsolata,Fira Code,monospace;font-size:14px;gap:12px;max-width:calc(100vw - 16px);opacity:0;overflow:visible;padding:16px 20px;pointer-events:none;position:fixed;transition:opacity .2s ease,visibility .2s ease;visibility:hidden;white-space:nowrap;z-index:10001}.herb-tooltip.visible{opacity:1;pointer-events:auto;visibility:visible}.herb-tooltip .herb-location{align-items:center;background:#f8f9fa;border-radius:12px 12px 0 0;color:#6b7280;cursor:pointer;display:flex;font-size:13px;font-weight:500;gap:12px;justify-content:space-between;margin:-16px -20px 0;padding:12px 20px;transition:all .2s ease}.herb-tooltip .herb-location:hover{background:#f1f3f4;color:#374151}.herb-copy-path-btn{background:transparent;border:none;border-radius:4px;color:#6b7280;cursor:pointer;flex-shrink:0;font-size:14px;padding:4px;position:relative;transition:all .2s ease}.herb-copy-path-btn:hover{background:hsla(220,9%,46%,.1);color:#374151}.herb-copy-path-btn:active{transform:scale(.95)}.herb-location:after{background:#1f2937;border-radius:6px;bottom:calc(100% + 8px);color:#fff;content:attr(data-tooltip);font-size:12px;padding:6px 10px;pointer-events:none;white-space:nowrap}.herb-location:after,.herb-location:before{left:50%;opacity:0;position:absolute;transform:translateX(-50%);transition:all .2s ease;visibility:hidden;z-index:10002}.herb-location:before{border:4px solid transparent;border-top-color:#1f2937;bottom:calc(100% + 2px);content:\"\"}.herb-location:hover:after,.herb-location:hover:before{opacity:1;visibility:visible}.herb-location:has(.herb-copy-path-btn:hover):after,.herb-location:has(.herb-copy-path-btn:hover):before{opacity:0!important;visibility:hidden!important}.herb-copy-path-btn:after{background:#1f2937;border-radius:6px;color:#fff;content:attr(data-tooltip);font-size:12px;padding:6px 10px;pointer-events:none;top:-36px;white-space:nowrap}.herb-copy-path-btn:after,.herb-copy-path-btn:before{left:50%;opacity:0;position:absolute;transform:translateX(-50%);transition:all .2s ease;visibility:hidden;z-index:10003}.herb-copy-path-btn:before{border:4px solid transparent;border-bottom-color:#1f2937;content:\"\";top:-6px}.herb-copy-path-btn:hover:after,.herb-copy-path-btn:hover:before{opacity:1;visibility:visible}.herb-tooltip .herb-erb-code{color:#111827;cursor:text;font-size:16px;font-weight:600;letter-spacing:-.025em;user-select:text}.herb-tooltip:before{bottom:-8px;content:\"\";height:8px;left:0;pointer-events:auto;position:absolute;right:0}.herb-tooltip:after{border:6px solid transparent;border-top-color:#e5e7eb;bottom:-6px;content:\"\";left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);z-index:10000}.herb-floating-menu{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;position:fixed;right:0;top:0;z-index:2147483643}.herb-menu-trigger{align-items:center;background:#fff;border:1px solid silver;border-radius:0 0 0 10px;border-right:none;border-top:none;box-shadow:0 1px 3px rgba(0,0,0,.1);cursor:pointer;display:flex;font-size:12px;gap:4px;justify-content:center;padding:4px 7px;position:relative;transition:all .2s ease;z-index:2147483640}.herb-menu-trigger:hover{background:#f9fafb;border-color:#9ca3af;box-shadow:0 4px 12px rgba(0,0,0,.15)}.herb-menu-trigger:active{transform:scale(.98)}.herb-menu-trigger.has-active-options{background:#dbeafe;border-color:#3b82f6}.herb-menu-trigger.has-active-options:hover{background:#bfdbfe;border-color:#2563eb}.herb-menu-trigger.has-active-options .herb-text{color:#1d4ed8}.herb-icon{display:block;font-size:14px;line-height:1}.herb-text{color:#555;font-size:11px;font-weight:600;letter-spacing:.2px}.herb-menu-panel{background:#fff;border:1px solid silver;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1);min-width:280px;opacity:0;padding:0;position:absolute;right:10px;top:28px;transform:translateY(-10px) scale(.95);transform-origin:top right;transition:all .3s cubic-bezier(.4,0,.2,1);visibility:hidden}.herb-menu-panel.open{opacity:1;transform:translateY(0) scale(1);visibility:visible}.herb-menu-header{background:#f9fafb;border-bottom:1px solid #e5e7eb;border-radius:8px 8px 0 0;color:#374151;font-size:14px;font-weight:600;padding:16px 20px}.herb-toggle-item{border-bottom:1px solid #f3f4f6;padding:12px 20px}.herb-toggle-item:last-child{border-bottom:none;border-radius:0 0 8px 8px}.herb-nested-toggle{border-left:2px solid #f3f4f6;margin-top:8px;padding-left:24px;transition:all .3s ease}.herb-nested-label{opacity:.8}.herb-nested-label .herb-toggle-text{color:#6b7280;font-size:13px}.herb-nested-switch{background:#e5e7eb;height:20px;width:36px}.herb-nested-switch:after{height:14px;left:3px;top:3px;width:14px}.herb-toggle-input:checked+.herb-nested-switch:after{transform:translateX(16px)}.herb-toggle-label{align-items:center;cursor:pointer;display:flex;gap:12px;user-select:none}.herb-toggle-input{display:none}.herb-toggle-switch{background:#cbd5e1;border-radius:12px;flex-shrink:0;height:24px;position:relative;transition:background .3s ease;width:44px}.herb-toggle-switch:after{background:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);content:\"\";height:18px;left:3px;position:absolute;top:3px;transition:transform .3s ease;width:18px}.herb-toggle-input:checked+.herb-toggle-switch{background:#8b5cf6}.herb-toggle-input:checked+.herb-toggle-switch:after{transform:translateX(20px)}.herb-toggle-text{color:#374151;flex:1;font-size:14px}.herb-toggle-label:hover .herb-toggle-switch{background:#94a3b8}.herb-toggle-label:hover .herb-toggle-input:checked+.herb-toggle-switch{background:#7c3aed}.herb-editor-section{background:linear-gradient(135deg,#fafbfc,#f8f9fa);border-bottom:1px solid #f3f4f6;overflow:hidden;padding:16px 20px;position:relative}.herb-editor-section:before{background:linear-gradient(90deg,transparent,rgba(139,92,246,.2),transparent);content:\"\";height:2px;left:0;position:absolute;right:0;top:0}.herb-editor-label{cursor:default;display:flex;flex-direction:column;gap:10px}.herb-editor-text{align-items:center;color:#6b7280;display:flex;font-size:12px;font-weight:600;gap:6px;letter-spacing:.5px;text-transform:uppercase}.herb-editor-select{appearance:none;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,.05);color:#1f2937;cursor:pointer;font-size:13.5px;font-weight:500;padding:10px 36px 10px 12px;transition:all .2s cubic-bezier(.4,0,.2,1);width:100%}.herb-editor-select,.herb-editor-select option{font-family:Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.herb-editor-select option{font-size:14px;font-weight:400;padding:8px 12px}.herb-editor-select:hover{background-color:#fafafa;border-color:#8b5cf6;box-shadow:0 2px 4px rgba(0,0,0,.08),0 0 0 1px rgba(139,92,246,.1);transform:translateY(-1px)}.herb-editor-select:focus{background-color:#fff;border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.15),0 2px 8px rgba(139,92,246,.1);outline:none;transform:translateY(-1px)}.herb-editor-select:active{box-shadow:0 1px 2px rgba(0,0,0,.05);transform:translateY(0)}.herb-disable-all-section{background:#f9fafb;border-radius:0 0 8px 8px;border-top:1px solid #f3f4f6;padding:16px 20px}.herb-disable-all-btn{background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;font-weight:500;padding:8px 16px;transition:background .2s ease;width:100%}.herb-disable-all-btn:hover{background:#dc2626}.herb-disable-all-btn:active{background:#b91c1c}.herb-validation-overlay{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.8);bottom:0;color:#e5e5e5;display:flex;font-family:SF Mono,Monaco,Cascadia Code,Roboto Mono,Consolas,Courier New,monospace;justify-content:center;left:0;line-height:1.6;overflow-y:auto;padding:20px;position:fixed;right:0;top:0;z-index:2147483640}.herb-validation-panel{background:#000;border:1px solid #374151;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);display:flex;flex-direction:column;max-height:80vh;max-width:1200px;overflow:hidden;width:100%}.herb-validation-header{align-items:flex-start;background:linear-gradient(135deg,#dc2626,#b91c1c);border-bottom:1px solid #374151;border-radius:12px 12px 0 0;color:#fff;display:flex;flex-shrink:0;gap:16px;justify-content:space-between;padding:20px 24px}.herb-validation-title{font-size:18px;font-weight:600;margin:0}.herb-validation-close{align-items:center;background:hsla(0,0%,100%,.1);border:1px solid hsla(0,0%,100%,.2);border-radius:6px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;font-size:16px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.herb-validation-close:hover{background:hsla(0,0%,100%,.2);border-color:hsla(0,0%,100%,.3)}.herb-file-tabs{background:#262626;border-bottom:1px solid #374151;display:flex;flex-shrink:0;overflow-x:auto}.herb-file-tab{background:none;border:none;border-bottom:3px solid transparent;color:#9ca3af;cursor:pointer;font-size:14px;font-weight:500;padding:12px 16px;transition:all .2s ease;white-space:nowrap}.herb-file-tab:hover{background:#2d2d2d;color:#e5e5e5}.herb-file-tab.active{background:#374151;border-bottom-color:#3b82f6;color:#fff}.herb-validation-content{flex:1;overflow-y:auto;padding:24px}.herb-validator-section{margin-bottom:32px}.herb-validator-section:last-child{margin-bottom:0}.herb-validator-section.hidden{display:none}.herb-validator-header{align-items:center;background:#262626;border-bottom:1px solid #374151;border-radius:8px 8px 0 0;color:#e5e5e5;display:flex;font-size:16px;font-weight:600;justify-content:space-between;padding:12px 16px}.herb-validator-count{background:hsla(0,0%,100%,.2);border-radius:12px;font-size:14px;font-weight:500;padding:2px 8px}.herb-validator-items{background:#111;border:1px solid #374151;border-radius:0 0 8px 8px;border-top:none}.herb-validation-item{background:#111;border-bottom:1px solid #374151;padding:20px}.herb-validation-item:last-child{border-bottom:none;border-radius:0 0 8px 8px}.herb-validation-item.hidden{display:none}.herb-validation-item .herb-validation-header{align-items:center;background:#1a1a1a;border:none;border-bottom:1px solid #374151;color:#9ca3af;display:flex;font-size:13px;gap:12px;margin:-20px -20px 16px;padding:12px 16px}.herb-validation-badge{border-radius:4px;color:#fff;font-size:12px;font-weight:600;letter-spacing:.025em;padding:4px 8px;text-transform:uppercase}.herb-validation-location{color:#9ca3af;font-family:SF Mono,Monaco,Inconsolata,Fira Code,monospace;font-size:13px}.herb-validation-message{background:#1a1a1a;border-bottom:1px solid #374151;color:#fbbf24;font-size:13px;font-weight:500;line-height:1.4;margin:-16px -16px 16px;padding:12px 16px}.herb-code-snippet{background:#1f2937;border-radius:6px;font-family:SF Mono,Monaco,Inconsolata,Fira Code,monospace;margin-bottom:16px;overflow:hidden}.herb-code-line{align-items:stretch;display:flex}.herb-code-line.herb-error-line{background:rgba(239,68,68,.1)}.herb-validation-overlay .herb-line-number{background:#374151;border-right:1px solid #4b5563;color:#9ca3af;flex-shrink:0;font-size:13px;padding:8px 12px;text-align:right;user-select:none;width:40px}.herb-validation-overlay .herb-error-line .herb-line-number{background:#dc2626;color:#fff}.herb-validation-overlay .herb-line-content{color:#e5e7eb;flex:1;font-size:13px;padding:8px 16px;white-space:pre-wrap}.herb-validation-overlay .herb-error-pointer{background:#1f2937;color:#dc2626;font-size:13px;font-weight:700;padding:4px 16px 8px 57px}.herb-validation-suggestion{align-items:flex-start;background:#111;border:1px solid #374151;border-radius:6px;color:#d1d5db;display:flex;font-size:14px;gap:8px;margin-top:16px;padding:12px 16px}.herb-suggestion-icon{color:#10b981;flex-shrink:0;font-size:16px;margin-top:1px}.herb-erb{color:#fbbf24;font-weight:600}.herb-erb-content{color:#34d399}.herb-tag{color:#60a5fa;font-weight:500}.herb-attr{color:#f472b6}.herb-value{color:#a78bfa}.herb-comment{color:#6b7280;font-style:italic}";
  styleInject(css_248z);

  class ErrorOverlay {
      constructor() {
          this.overlay = null;
          this.allValidationData = [];
          this.isVisible = false;
          this.init();
      }
      init() {
          this.detectValidationErrors();
          const hasParserErrors = document.querySelector('.herb-parser-error-overlay') !== null;
          if (this.getTotalErrorCount() > 0) {
              this.createOverlay();
              this.setupToggleHandler();
          }
          else if (hasParserErrors) {
              console.log('[ErrorOverlay] Parser error overlay already displayed');
          }
          else {
              console.log('[ErrorOverlay] No errors found, not creating overlay');
          }
      }
      detectValidationErrors() {
          const templatesToRemove = [];
          const validationTemplates = document.querySelectorAll('template[data-herb-validation-error]');
          if (validationTemplates.length > 0) {
              this.processValidationTemplates(validationTemplates, templatesToRemove);
          }
          const jsonTemplates = document.querySelectorAll('template[data-herb-validation-errors]');
          jsonTemplates.forEach((template, _index) => {
              try {
                  let jsonData = template.textContent?.trim();
                  if (!jsonData) {
                      jsonData = template.innerHTML?.trim();
                  }
                  if (jsonData) {
                      const validationData = JSON.parse(jsonData);
                      this.allValidationData.push(validationData);
                      templatesToRemove.push(template);
                  }
              }
              catch (error) {
                  console.error('Failed to parse validation errors from template:', error, {
                      textContent: template.textContent,
                      innerHTML: template.innerHTML
                  });
                  templatesToRemove.push(template);
              }
          });
          const htmlTemplates = document.querySelectorAll('template[data-herb-parser-error]');
          htmlTemplates.forEach((template, _index) => {
              try {
                  let htmlContent = template.innerHTML?.trim() || template.textContent?.trim();
                  if (htmlContent) {
                      this.displayParserErrorOverlay(htmlContent);
                      templatesToRemove.push(template);
                  }
              }
              catch (error) {
                  console.error('Failed to process parser error template:', error);
                  templatesToRemove.push(template);
              }
          });
          templatesToRemove.forEach((template, _index) => template.remove());
      }
      processValidationTemplates(templates, templatesToRemove) {
          const validationFragments = [];
          const errorMap = new Map();
          templates.forEach((template) => {
              try {
                  const metadata = {
                      severity: template.getAttribute('data-severity') || 'error',
                      source: template.getAttribute('data-source') || 'unknown',
                      code: template.getAttribute('data-code') || '',
                      line: parseInt(template.getAttribute('data-line') || '0'),
                      column: parseInt(template.getAttribute('data-column') || '0'),
                      filename: template.getAttribute('data-filename') || 'unknown',
                      message: template.getAttribute('data-message') || '',
                      suggestion: template.getAttribute('data-suggestion') || undefined,
                      timestamp: template.getAttribute('data-timestamp') || new Date().toISOString()
                  };
                  const html = template.innerHTML?.trim() || '';
                  if (html) {
                      const errorKey = `${metadata.filename}:${metadata.line}:${metadata.column}:${metadata.code}:${metadata.message}`;
                      if (errorMap.has(errorKey)) {
                          const existing = errorMap.get(errorKey);
                          existing.count++;
                      }
                      else {
                          errorMap.set(errorKey, { metadata, html, count: 1 });
                      }
                      templatesToRemove.push(template);
                  }
              }
              catch (error) {
                  console.error('Failed to process validation template:', error);
                  templatesToRemove.push(template);
              }
          });
          validationFragments.push(...errorMap.values());
          if (validationFragments.length > 0) {
              this.displayValidationOverlay(validationFragments);
          }
      }
      createOverlay() {
          if (this.allValidationData.length === 0)
              return;
          this.overlay = document.createElement('div');
          this.overlay.id = 'herb-error-overlay';
          this.overlay.innerHTML = `
      <style>
        #herb-error-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          display: none;
          overflow: auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .herb-error-content {
          background: #1a1a1a;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          max-width: 800px;
          color: #fff;
        }

        .herb-error-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }

        .herb-error-title {
          font-size: 18px;
          font-weight: 600;
          color: #ff6b6b;
        }

        .herb-error-close {
          background: none;
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          padding: 5px;
        }

        .herb-error-file-section {
          margin-bottom: 20px;
        }

        .herb-error-file {
          font-size: 14px;
          color: #888;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .herb-error-item {
          background: #2a2a2a;
          border-radius: 6px;
          padding: 15px;
          margin-bottom: 10px;
          border-left: 4px solid #ff6b6b;
        }

        .herb-error-item.warning {
          border-left-color: #ffd93d;
        }

        .herb-error-item.info {
          border-left-color: #4ecdc4;
        }

        .herb-error-item.hint {
          border-left-color: #95a5a6;
        }

        .herb-error-message {
          font-size: 14px;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .herb-error-location {
          font-size: 12px;
          color: #888;
          margin-bottom: 8px;
        }

        .herb-error-suggestion {
          font-size: 12px;
          color: #4ecdc4;
          font-style: italic;
        }

        .herb-error-source {
          font-size: 11px;
          color: #666;
          text-align: right;
        }

        .herb-file-separator {
          border-top: 1px solid #444;
          margin: 20px 0;
        }
      </style>

      <div class="herb-error-content">
        <div class="herb-error-header">
          <div class="herb-error-title">
            Errors (${this.getTotalErrorCount()})
          </div>
          <button class="herb-error-close">&times;</button>
        </div>

        <div class="herb-error-files">
          ${this.allValidationData.map((validationData, index) => `
            ${index > 0 ? '<div class="herb-file-separator"></div>' : ''}
            <div class="herb-error-file-section">
              <div class="herb-error-file">${validationData.filename} (${this.getErrorSummary(validationData.validationErrors)})</div>
              <div class="herb-error-list">
                ${validationData.validationErrors.map(error => `
                  <div class="herb-error-item ${error.severity}">
                    <div class="herb-error-message">${this.escapeHtml(error.message)}</div>
                    ${error.location ? `<div class="herb-error-location">Line ${error.location.line}, Column ${error.location.column}</div>` : ''}
                    ${error.suggestion ? `<div class="herb-error-suggestion">💡 ${this.escapeHtml(error.suggestion)}</div>` : ''}
                    <div class="herb-error-source">${error.source}${error.code ? ` (${error.code})` : ''}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
          document.body.appendChild(this.overlay);
          const closeBtn = this.overlay.querySelector('.herb-error-close');
          closeBtn?.addEventListener('click', () => this.hide());
          this.overlay.addEventListener('click', (e) => {
              if (e.target === this.overlay) {
                  this.hide();
              }
          });
          document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && this.isVisible) {
                  this.hide();
              }
          });
      }
      setupToggleHandler() {
          document.addEventListener('keydown', (e) => {
              if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'E') {
                  e.preventDefault();
                  this.toggle();
              }
          });
          if (this.hasErrorSeverity()) {
              setTimeout(() => this.show(), 100);
          }
      }
      getTotalErrorCount() {
          return this.allValidationData.reduce((total, data) => total + data.validationErrors.length, 0);
      }
      getErrorSummary(errors) {
          if (errors.length === 1) {
              return '1 error';
          }
          const errorsBySource = errors.reduce((acc, error) => {
              const source = error.source || 'Unknown';
              acc[source] = (acc[source] || 0) + 1;
              return acc;
          }, {});
          const sourceKeys = Object.keys(errorsBySource);
          if (sourceKeys.length === 1) {
              const source = sourceKeys[0];
              const count = errorsBySource[source];
              const sourceLabel = this.getSourceLabel(source);
              return `${count} ${sourceLabel} error${count === 1 ? '' : 's'}`;
          }
          else {
              const parts = sourceKeys.map(source => {
                  const count = errorsBySource[source];
                  const sourceLabel = this.getSourceLabel(source);
                  return `${count} ${sourceLabel}`;
              });
              return `${errors.length} errors (${parts.join(', ')})`;
          }
      }
      getSourceLabel(source) {
          switch (source) {
              case 'Parser': return 'parser';
              case 'SecurityValidator': return 'security';
              case 'NestingValidator': return 'nesting';
              case 'AccessibilityValidator': return 'accessibility';
              default: return 'validation';
          }
      }
      hasErrorSeverity() {
          return this.allValidationData.some(data => data.validationErrors.some(error => error.severity === 'error'));
      }
      escapeHtml(unsafe) {
          return unsafe
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
      }
      show() {
          if (this.overlay) {
              this.overlay.style.display = 'block';
              this.isVisible = true;
          }
      }
      hide() {
          if (this.overlay) {
              this.overlay.style.display = 'none';
              this.isVisible = false;
          }
      }
      toggle() {
          if (this.isVisible) {
              this.hide();
          }
          else {
              this.show();
          }
      }
      hasErrors() {
          return this.getTotalErrorCount() > 0;
      }
      getErrorCount() {
          return this.getTotalErrorCount();
      }
      displayParserErrorOverlay(htmlContent) {
          const existingOverlay = document.querySelector('.herb-parser-error-overlay');
          if (existingOverlay) {
              existingOverlay.remove();
          }
          const container = document.createElement('div');
          container.innerHTML = htmlContent;
          const overlay = container.querySelector('.herb-parser-error-overlay');
          if (overlay) {
              document.body.appendChild(overlay);
              overlay.style.display = 'flex';
          }
          else {
              console.error('[ErrorOverlay] No parser error overlay found in HTML template');
          }
      }
      displayValidationOverlay(fragments) {
          const existingOverlay = document.querySelector('.herb-validation-overlay');
          if (existingOverlay) {
              existingOverlay.remove();
          }
          const errorsBySource = new Map();
          const errorsByFile = new Map();
          fragments.forEach(fragment => {
              const source = fragment.metadata.source;
              if (!errorsBySource.has(source)) {
                  errorsBySource.set(source, []);
              }
              errorsBySource.get(source).push(fragment);
              const file = fragment.metadata.filename;
              if (!errorsByFile.has(file)) {
                  errorsByFile.set(file, []);
              }
              errorsByFile.get(file).push(fragment);
          });
          const errorCount = fragments.filter(f => f.metadata.severity === 'error').reduce((sum, f) => sum + f.count, 0);
          const warningCount = fragments.filter(f => f.metadata.severity === 'warning').reduce((sum, f) => sum + f.count, 0);
          const totalCount = fragments.reduce((sum, f) => sum + f.count, 0);
          const uniqueCount = fragments.length;
          const overlayHTML = this.buildValidationOverlayHTML(fragments, errorsBySource, errorsByFile, { errorCount, warningCount, totalCount, uniqueCount });
          const overlay = document.createElement('div');
          overlay.className = 'herb-validation-overlay';
          overlay.innerHTML = overlayHTML;
          document.body.appendChild(overlay);
          this.setupValidationOverlayHandlers(overlay);
      }
      buildValidationOverlayHTML(_fragments, errorsBySource, errorsByFile, counts) {
          let title = counts.uniqueCount === 1 ? 'Validation Issue' : `Validation Issues`;
          if (counts.totalCount !== counts.uniqueCount) {
              title += ` (${counts.uniqueCount} unique, ${counts.totalCount} total)`;
          }
          else {
              title += ` (${counts.totalCount})`;
          }
          const subtitle = [];
          if (counts.errorCount > 0)
              subtitle.push(`${counts.errorCount} error${counts.errorCount !== 1 ? 's' : ''}`);
          if (counts.warningCount > 0)
              subtitle.push(`${counts.warningCount} warning${counts.warningCount !== 1 ? 's' : ''}`);
          let fileTabs = '';
          if (errorsByFile.size > 1) {
              const totalErrors = Array.from(errorsByFile.values()).reduce((sum, errors) => sum + errors.length, 0);
              fileTabs = `
        <div class="herb-file-tabs">
          <button class="herb-file-tab active" data-file="*">
            All (${totalErrors})
          </button>
          ${Array.from(errorsByFile.entries()).map(([file, errors]) => `
            <button class="herb-file-tab" data-file="${this.escapeAttr(file)}">
              ${this.escapeHtml(file)} (${errors.length})
            </button>
          `).join('')}
        </div>
      `;
          }
          const contentSections = Array.from(errorsBySource.entries()).map(([source, sourceFragments]) => `
      <div class="herb-validator-section" data-source="${this.escapeAttr(source)}">
        <div class="herb-validator-header">
          <h3>${this.escapeHtml(source.replace('Validator', ''))} Issues (${sourceFragments.length})</h3>
        </div>
        <div class="herb-validator-content">
          ${sourceFragments.map(f => {
            const fileAttribute = `data-error-file="${this.escapeAttr(f.metadata.filename)}"`;
            if (f.count > 1) {
                return `
                <div class="herb-validation-item-wrapper" ${fileAttribute}>
                  ${f.html}
                  <div class="herb-occurrence-badge" title="This error occurs ${f.count} times in the template">
                    <span class="herb-occurrence-icon">⚠</span>
                    <span class="herb-occurrence-count">×${f.count}</span>
                  </div>
                </div>
              `;
            }
            return `<div class="herb-validation-error-container" ${fileAttribute}>${f.html}</div>`;
        }).join('')}
        </div>
      </div>
    `).join('');
          return `
      <style>${this.getValidationOverlayStyles()}</style>
      <div class="herb-validation-container">
        <div class="herb-validation-header">
          <div class="herb-validation-header-content">
            <div class="herb-validation-title">
              <span class="herb-validation-icon">⚠️</span>
              ${title}
            </div>
            <div class="herb-validation-subtitle">${subtitle.join(', ')}</div>
          </div>
          <button class="herb-close-button" title="Close (Esc)">×</button>
        </div>
        ${fileTabs}
        <div class="herb-validation-content">
          ${contentSections}
        </div>
        <div class="herb-dismiss-hint" style="padding-left: 24px; padding-right: 24px; padding-bottom: 12px;">
          Click outside, press <kbd style="display: inline-block; padding: 2px 6px; font-family: monospace; font-size: 0.9em; color: #333; background: #f7f7f7; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 0 #ccc, 0 2px 3px rgba(0,0,0,0.2) inset;">Esc</kbd> key, or fix the code to dismiss.<br>

          You can also disable this overlay by passing <code style="color: #ffeb3b; font-family: monospace; font-size: 12pt;">validation_mode: :none</code> to <code style="color: #ffeb3b; font-family: monospace; font-size: 12pt;">Herb::Engine</code>.
        </div>
      </div>
    `;
      }
      getValidationOverlayStyles() {
          return `
      .herb-validation-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        color: #e5e5e5;
        line-height: 1.6;
      }

      .herb-validation-container {
        background: #000000;
        border: 1px solid #374151;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        max-width: 1200px;
        max-height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .herb-validation-header {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        padding: 20px 24px;
        border-bottom: 1px solid #374151;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .herb-validation-title {
        font-size: 18px;
        font-weight: 600;
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .herb-validation-subtitle {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        margin-top: 4px;
      }

      .herb-file-tabs {
        background: #1a1a1a;
        border-bottom: 1px solid #374151;
        padding: 0;
        display: flex;
        overflow-x: auto;
      }

      .herb-file-tab {
        background: transparent;
        border: none;
        color: #9ca3af;
        padding: 12px 20px;
        cursor: pointer;
        font-size: 13px;
        white-space: nowrap;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;
      }

      .herb-file-tab:hover {
        background: #262626;
        color: #e5e5e5;
      }

      .herb-file-tab.active {
        color: #f59e0b;
        border-bottom-color: #f59e0b;
        background: #262626;
      }

      .herb-validation-content {
        flex: 1;
        overflow-y: auto;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .herb-validator-section {
        background: #0f0f0f;
        border: 1px solid #2d2d2d;
        border-radius: 8px;
      }

      .herb-validator-header {
        background: #1a1a1a;
        padding: 12px 16px;
        border-bottom: 1px solid #2d2d2d;
      }

      .herb-validator-header h3 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: #e5e5e5;
      }

      .herb-validator-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .herb-validation-item {
        border-left: 3px solid #4a4a4a;
        padding-left: 16px;
      }

      .herb-validation-item[data-severity="error"] {
        border-left-color: #7f1d1d;
      }

      .herb-validation-item[data-severity="warning"] {
        border-left-color: #78350f;
      }

      .herb-validation-item[data-severity="info"] {
        border-left-color: #1e3a8a;
      }

      .herb-validation-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .herb-validation-badge {
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
      }

      .herb-validation-location {
        font-size: 12px;
        color: #9ca3af;
      }

      .herb-validation-message {
        font-size: 14px;
        margin-bottom: 12px;
        line-height: 1.5;
      }

      .herb-code-snippet {
        background: #1a1a1a;
        border: 1px solid #2d2d2d;
        border-radius: 4px;
        padding: 12px;
        overflow-x: auto;
      }

      .herb-code-line {
        display: flex;
        align-items: flex-start;
        min-height: 20px;
        font-size: 13px;
        line-height: 1.5;
      }

      .herb-line-number {
        color: #6b7280;
        width: 40px;
        text-align: right;
        padding-right: 16px;
        user-select: none;
        flex-shrink: 0;
      }

      .herb-line-content {
        flex: 1;
        white-space: pre;
        font-family: inherit;
      }

      .herb-error-line {
        background: rgba(220, 38, 38, 0.1);
      }

      .herb-error-line .herb-line-number {
        color: #dc2626;
        font-weight: 600;
      }

      .herb-error-pointer {
        color: #dc2626;
        font-weight: bold;
        margin-left: 56px;
        font-size: 12px;
      }

      .herb-validation-suggestion {
        background: #1e3a1e;
        border: 1px solid #10b981;
        border-radius: 4px;
        padding: 8px 12px;
        margin-top: 8px;
        font-size: 13px;
        color: #10b981;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .herb-validation-item-wrapper,
      .herb-validation-error-container {
        position: relative;
      }

      .herb-validation-error-container.hidden,
      .herb-validation-item-wrapper.hidden,
      .herb-validator-section.hidden {
        display: none;
      }

      .herb-occurrence-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        background: #dc2626;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .herb-occurrence-icon {
        font-size: 10px;
      }

      .herb-occurrence-count {
        font-weight: bold;
      }

      .herb-close-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.2s;
      }

      .herb-close-button:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
      }

      /* Syntax highlighting */
      .herb-erb { color: #61dafb; }
      .herb-erb-content { color: #c678dd; }
      .herb-tag { color: #e06c75; }
      .herb-attr { color: #d19a66; }
      .herb-value { color: #98c379; }
      .herb-comment { color: #5c6370; font-style: italic; }
    `;
      }
      setupValidationOverlayHandlers(overlay) {
          const closeBtn = overlay.querySelector('.herb-close-button');
          if (closeBtn) {
              closeBtn.addEventListener('click', () => overlay.remove());
          }
          overlay.addEventListener('click', (e) => {
              if (e.target === overlay) {
                  overlay.remove();
              }
          });
          const escHandler = (e) => {
              if (e.key === 'Escape') {
                  overlay.remove();
                  document.removeEventListener('keydown', escHandler);
              }
          };
          document.addEventListener('keydown', escHandler);
          const fileTabs = overlay.querySelectorAll('.herb-file-tab');
          fileTabs.forEach(tab => {
              tab.addEventListener('click', () => {
                  const selectedFile = tab.getAttribute('data-file');
                  fileTabs.forEach(t => t.classList.remove('active'));
                  tab.classList.add('active');
                  const errorContainers = overlay.querySelectorAll('[data-error-file]');
                  const validatorSections = overlay.querySelectorAll('.herb-validator-section');
                  errorContainers.forEach(container => {
                      const containerFile = container.getAttribute('data-error-file');
                      if (selectedFile === '*' || containerFile === selectedFile) {
                          container.classList.remove('hidden');
                      }
                      else {
                          container.classList.add('hidden');
                      }
                  });
                  validatorSections.forEach(section => {
                      const sectionContent = section.querySelector('.herb-validator-content');
                      const visibleErrors = sectionContent?.querySelectorAll('[data-error-file]:not(.hidden)').length || 0;
                      const header = section.querySelector('h3');
                      const source = section.getAttribute('data-source')?.replace('Validator', '') || 'Unknown';
                      if (header) {
                          header.textContent = `${source} Issues (${visibleErrors})`;
                      }
                      if (visibleErrors === 0) {
                          section.classList.add('hidden');
                      }
                      else {
                          section.classList.remove('hidden');
                      }
                  });
              });
          });
      }
      escapeAttr(text) {
          return this.escapeHtml(text).replace(/"/g, '&quot;');
      }
  }

  class HerbOverlay {
      constructor(options = {}) {
          this.options = options;
          this.showingERB = false;
          this.showingERBOutlines = false;
          this.showingERBHoverReveal = false;
          this.showingTooltips = true;
          this.showingViewOutlines = false;
          this.showingPartialOutlines = false;
          this.showingComponentOutlines = false;
          this.menuOpen = false;
          this.projectPath = '';
          this.preferredEditor = 'auto';
          this.defaultEditorFromServer = 'vscode';
          this.currentlyHoveredERBElement = null;
          this.errorOverlay = null;
          this.handleRevealedERBClick = (event) => {
              event.stopPropagation();
              event.preventDefault();
              const element = event.currentTarget;
              if (!element)
                  return;
              const fullPath = element.getAttribute('data-herb-debug-file-full-path');
              const line = element.getAttribute('data-herb-debug-line');
              const column = element.getAttribute('data-herb-debug-column');
              if (fullPath) {
                  this.openFileInEditor(fullPath, line ? parseInt(line) : 1, column ? parseInt(column) : 1);
              }
          };
          if (options.autoInit !== false) {
              this.init();
          }
      }
      init() {
          this.loadProjectPath();
          this.loadDefaultEditor();
          this.loadSettings();
          this.injectMenu();
          this.setupMenuToggle();
          this.setupToggleSwitches();
          this.setupEditorDropdown();
          this.initializeErrorOverlay();
          this.setupTurboListeners();
          this.applySettings();
      }
      loadProjectPath() {
          if (this.options.projectPath) {
              this.projectPath = this.options.projectPath;
              return;
          }
          const metaTag = document.querySelector('meta[name="herb-project-path"]');
          if (metaTag?.content) {
              this.projectPath = metaTag.content;
          }
      }
      loadDefaultEditor() {
          const metaTag = document.querySelector('meta[name="herb-default-editor"]');
          if (metaTag?.content) {
              const defaultEditor = metaTag.content.toLowerCase();
              const isValidEditor = HerbOverlay.EDITOR_OPTIONS.some(option => option.value === defaultEditor);
              if (isValidEditor) {
                  this.defaultEditorFromServer = defaultEditor;
              }
          }
      }
      loadSettings() {
          const savedSettings = localStorage.getItem(HerbOverlay.SETTINGS_KEY);
          if (savedSettings) {
              try {
                  const settings = JSON.parse(savedSettings);
                  this.showingERB = settings.showingERB || false;
                  this.showingERBOutlines = settings.showingERBOutlines || false;
                  this.showingERBHoverReveal = settings.showingERBHoverReveal || false;
                  this.showingTooltips = settings.showingTooltips !== undefined ? settings.showingTooltips : true;
                  this.showingViewOutlines = settings.showingViewOutlines || false;
                  this.showingPartialOutlines = settings.showingPartialOutlines || false;
                  this.showingComponentOutlines = settings.showingComponentOutlines || false;
                  this.menuOpen = settings.menuOpen || false;
                  if (settings.preferredEditor) {
                      this.preferredEditor = settings.preferredEditor;
                  }
              }
              catch (e) {
                  console.warn('Failed to load Herb dev tools settings:', e);
              }
          }
      }
      saveSettings() {
          const settings = {
              showingERB: this.showingERB,
              showingERBOutlines: this.showingERBOutlines,
              showingERBHoverReveal: this.showingERBHoverReveal,
              showingTooltips: this.showingTooltips,
              showingViewOutlines: this.showingViewOutlines,
              showingPartialOutlines: this.showingPartialOutlines,
              showingComponentOutlines: this.showingComponentOutlines,
              menuOpen: this.menuOpen,
              preferredEditor: this.preferredEditor
          };
          localStorage.setItem(HerbOverlay.SETTINGS_KEY, JSON.stringify(settings));
          this.updateMenuButtonState();
      }
      updateMenuButtonState() {
          const menuTrigger = document.getElementById('herbMenuTrigger');
          if (menuTrigger) {
              const hasActiveOptions = this.showingERB || this.showingERBOutlines || this.showingViewOutlines || this.showingPartialOutlines || this.showingComponentOutlines;
              if (hasActiveOptions) {
                  menuTrigger.classList.add('has-active-options');
              }
              else {
                  menuTrigger.classList.remove('has-active-options');
              }
          }
      }
      injectMenu() {
          const existingMenu = document.querySelector('.herb-floating-menu');
          if (existingMenu) {
              return;
          }
          const menuHTML = `
      <div class="herb-floating-menu">
        <button class="herb-menu-trigger" id="herbMenuTrigger">
          <span class="herb-icon">🌿</span>
          <span class="herb-text">Herb</span>
        </button>

        <div class="herb-menu-panel" id="herbMenuPanel">
          <div class="herb-menu-header">Herb Debug Tools</div>

          <div class="herb-toggle-item">
            <label class="herb-toggle-label">
              <input type="checkbox" id="herbToggleViewOutlines" class="herb-toggle-input">
              <span class="herb-toggle-switch"></span>
              <span class="herb-toggle-text">Show View Outlines</span>
            </label>
          </div>

          <div class="herb-toggle-item">
            <label class="herb-toggle-label">
              <input type="checkbox" id="herbTogglePartialOutlines" class="herb-toggle-input">
              <span class="herb-toggle-switch"></span>
              <span class="herb-toggle-text">Show Partial Outlines</span>
            </label>
          </div>

          <div class="herb-toggle-item">
            <label class="herb-toggle-label">
              <input type="checkbox" id="herbToggleComponentOutlines" class="herb-toggle-input">
              <span class="herb-toggle-switch"></span>
              <span class="herb-toggle-text">Show Component Outlines</span>
            </label>
          </div>

          <div class="herb-toggle-item">
            <label class="herb-toggle-label">
              <input type="checkbox" id="herbToggleERBOutlines" class="herb-toggle-input">
              <span class="herb-toggle-switch"></span>
              <span class="herb-toggle-text">Show ERB Output Outlines</span>
            </label>

            <div class="herb-nested-toggle" id="herbERBHoverRevealNested" style="display: none;">
              <label class="herb-toggle-label herb-nested-label">
                <input type="checkbox" id="herbToggleERBHoverReveal" class="herb-toggle-input">
                <span class="herb-toggle-switch herb-nested-switch"></span>
                <span class="herb-toggle-text">Reveal ERB Output tag on hover</span>
              </label>
            </div>

            <div class="herb-nested-toggle" id="herbTooltipsNested" style="display: none;">
              <label class="herb-toggle-label herb-nested-label">
                <input type="checkbox" id="herbToggleTooltips" class="herb-toggle-input">
                <span class="herb-toggle-switch herb-nested-switch"></span>
                <span class="herb-toggle-text">Show Tooltips</span>
              </label>
            </div>
          </div>

          <div class="herb-toggle-item">
            <label class="herb-toggle-label">
              <input type="checkbox" id="herbToggleERB" class="herb-toggle-input">
              <span class="herb-toggle-switch"></span>
              <span class="herb-toggle-text">Show ERB Output Tags</span>
            </label>
          </div>

          <div class="herb-editor-section">
            <label class="herb-editor-label">
              <span class="herb-editor-text">Editor</span>
              <select id="herbEditorSelect" class="herb-editor-select">
                ${HerbOverlay.EDITOR_OPTIONS.map(editor => `<option value="${editor.value}">${editor.label}</option>`).join('')}
              </select>
            </label>
          </div>

          <div class="herb-disable-all-section">
            <button id="herbDisableAll" class="herb-disable-all-btn">Disable All</button>
          </div>
        </div>
      </div>
    `;
          document.body.insertAdjacentHTML('beforeend', menuHTML);
      }
      applySettings() {
          this.toggleViewOutlines(this.showingViewOutlines);
          this.togglePartialOutlines(this.showingPartialOutlines);
          this.toggleComponentOutlines(this.showingComponentOutlines);
          this.toggleERBTags(this.showingERB);
          this.toggleERBOutlines(this.showingERBOutlines);
          const menuTrigger = document.getElementById('herbMenuTrigger');
          const menuPanel = document.getElementById('herbMenuPanel');
          if (menuTrigger && menuPanel && this.menuOpen) {
              menuTrigger.classList.add('active');
              menuPanel.classList.add('open');
          }
      }
      setupMenuToggle() {
          const menuTrigger = document.getElementById('herbMenuTrigger');
          const menuPanel = document.getElementById('herbMenuPanel');
          if (menuTrigger && menuPanel) {
              menuTrigger.addEventListener('click', () => {
                  this.menuOpen = !this.menuOpen;
                  if (this.menuOpen) {
                      menuTrigger.classList.add('active');
                      menuPanel.classList.add('open');
                  }
                  else {
                      menuTrigger.classList.remove('active');
                      menuPanel.classList.remove('open');
                  }
                  this.saveSettings();
              });
              document.addEventListener('click', (e) => {
                  const target = e.target;
                  const floatingMenu = document.querySelector('.herb-floating-menu');
                  if (floatingMenu && !floatingMenu.contains(target) && this.menuOpen) {
                      this.menuOpen = false;
                      menuTrigger.classList.remove('active');
                      menuPanel.classList.remove('open');
                      this.saveSettings();
                  }
              });
          }
      }
      setupTurboListeners() {
          document.addEventListener('turbo:load', () => {
              this.reinitializeAfterNavigation();
          });
          document.addEventListener('turbo:render', () => {
              this.reinitializeAfterNavigation();
          });
          document.addEventListener('turbo:visit', () => {
              this.reinitializeAfterNavigation();
          });
      }
      reinitializeAfterNavigation() {
          this.injectMenu();
          this.setupMenuToggle();
          this.setupToggleSwitches();
          this.setupEditorDropdown();
          this.applySettings();
          this.updateMenuButtonState();
      }
      setupToggleSwitches() {
          const toggleViewOutlinesSwitch = document.getElementById('herbToggleViewOutlines');
          if (toggleViewOutlinesSwitch) {
              toggleViewOutlinesSwitch.checked = this.showingViewOutlines;
              toggleViewOutlinesSwitch.addEventListener('change', () => {
                  this.toggleViewOutlines(toggleViewOutlinesSwitch.checked);
              });
          }
          const togglePartialOutlinesSwitch = document.getElementById('herbTogglePartialOutlines');
          if (togglePartialOutlinesSwitch) {
              togglePartialOutlinesSwitch.checked = this.showingPartialOutlines;
              togglePartialOutlinesSwitch.addEventListener('change', () => {
                  this.togglePartialOutlines(togglePartialOutlinesSwitch.checked);
              });
          }
          const toggleComponentOutlinesSwitch = document.getElementById('herbToggleComponentOutlines');
          if (toggleComponentOutlinesSwitch) {
              toggleComponentOutlinesSwitch.checked = this.showingComponentOutlines;
              toggleComponentOutlinesSwitch.addEventListener('change', () => {
                  this.toggleComponentOutlines(toggleComponentOutlinesSwitch.checked);
              });
          }
          const toggleERBSwitch = document.getElementById('herbToggleERB');
          const toggleERBOutlinesSwitch = document.getElementById('herbToggleERBOutlines');
          if (toggleERBSwitch) {
              toggleERBSwitch.checked = this.showingERB;
              toggleERBSwitch.addEventListener('change', () => {
                  if (toggleERBSwitch.checked && toggleERBOutlinesSwitch) {
                      toggleERBOutlinesSwitch.checked = false;
                      this.toggleERBOutlines(false);
                  }
                  this.toggleERBTags(toggleERBSwitch.checked);
              });
          }
          if (toggleERBOutlinesSwitch) {
              toggleERBOutlinesSwitch.checked = this.showingERBOutlines;
              toggleERBOutlinesSwitch.addEventListener('change', () => {
                  if (toggleERBOutlinesSwitch.checked && toggleERBSwitch) {
                      toggleERBSwitch.checked = false;
                      this.toggleERBTags(false);
                  }
                  this.toggleERBOutlines(toggleERBOutlinesSwitch.checked);
                  this.updateNestedToggleVisibility();
              });
          }
          else {
              console.warn('ERB outlines toggle switch not found');
          }
          const toggleERBHoverRevealSwitch = document.getElementById('herbToggleERBHoverReveal');
          if (toggleERBHoverRevealSwitch) {
              toggleERBHoverRevealSwitch.checked = this.showingERBHoverReveal;
              toggleERBHoverRevealSwitch.addEventListener('change', () => {
                  this.toggleERBHoverReveal(toggleERBHoverRevealSwitch.checked);
              });
          }
          const toggleTooltipsSwitch = document.getElementById('herbToggleTooltips');
          if (toggleTooltipsSwitch) {
              toggleTooltipsSwitch.checked = this.showingTooltips;
              toggleTooltipsSwitch.addEventListener('change', () => {
                  this.toggleTooltips(toggleTooltipsSwitch.checked);
              });
          }
          this.updateNestedToggleVisibility();
          const disableAllBtn = document.getElementById('herbDisableAll');
          if (disableAllBtn) {
              disableAllBtn.addEventListener('click', () => {
                  this.disableAll();
              });
          }
      }
      setupEditorDropdown() {
          const editorSelect = document.getElementById('herbEditorSelect');
          if (editorSelect) {
              const autoOption = editorSelect.querySelector('option[value="auto"]');
              if (autoOption) {
                  const editorLabel = HerbOverlay.EDITOR_OPTIONS.find(opt => opt.value === this.defaultEditorFromServer)?.label || this.defaultEditorFromServer;
                  const metaTag = document.querySelector('meta[name="herb-default-editor"]');
                  if (metaTag?.content) {
                      autoOption.textContent = `Auto (from server): ${editorLabel}`;
                  }
                  else {
                      autoOption.textContent = `Auto (default): ${editorLabel}`;
                  }
              }
              editorSelect.value = this.preferredEditor;
              editorSelect.addEventListener('change', () => {
                  this.preferredEditor = editorSelect.value;
                  this.saveSettings();
              });
          }
      }
      toggleViewOutlines(show) {
          this.showingViewOutlines = show !== undefined ? show : !this.showingViewOutlines;
          const viewOutlines = document.querySelectorAll('[data-herb-debug-outline-type="view"], [data-herb-debug-outline-type*="view"]');
          viewOutlines.forEach((outline) => {
              const element = outline;
              if (this.showingViewOutlines) {
                  element.style.outline = '2px dotted #3b82f6';
                  element.style.outlineOffset = element.tagName.toLowerCase() === 'html' ? '-2px' : '2px';
                  element.classList.add('show-outline');
                  this.createOverlayLabel(element, 'view');
              }
              else {
                  element.style.outline = 'none';
                  element.style.outlineOffset = '0';
                  element.classList.remove('show-outline');
                  this.removeOverlayLabel(element);
              }
          });
          this.saveSettings();
      }
      togglePartialOutlines(show) {
          this.showingPartialOutlines = show !== undefined ? show : !this.showingPartialOutlines;
          const partialOutlines = document.querySelectorAll('[data-herb-debug-outline-type="partial"], [data-herb-debug-outline-type*="partial"]');
          partialOutlines.forEach((outline) => {
              const element = outline;
              if (this.showingPartialOutlines) {
                  element.style.outline = '2px dotted #10b981';
                  element.style.outlineOffset = element.tagName.toLowerCase() === 'html' ? '-2px' : '2px';
                  element.classList.add('show-outline');
                  this.createOverlayLabel(element, 'partial');
              }
              else {
                  element.style.outline = 'none';
                  element.style.outlineOffset = '0';
                  element.classList.remove('show-outline');
                  this.removeOverlayLabel(element);
              }
          });
          this.saveSettings();
      }
      toggleComponentOutlines(show) {
          this.showingComponentOutlines = show !== undefined ? show : !this.showingComponentOutlines;
          const componentOutlines = document.querySelectorAll('[data-herb-debug-outline-type="component"], [data-herb-debug-outline-type*="component"]');
          componentOutlines.forEach((outline) => {
              const element = outline;
              if (this.showingComponentOutlines) {
                  element.style.outline = '2px dotted #f59e0b';
                  element.style.outlineOffset = element.tagName.toLowerCase() === 'html' ? '-2px' : '2px';
                  element.classList.add('show-outline');
                  this.createOverlayLabel(element, 'component');
              }
              else {
                  element.style.outline = 'none';
                  element.style.outlineOffset = '0';
                  element.classList.remove('show-outline');
                  this.removeOverlayLabel(element);
              }
          });
          this.saveSettings();
      }
      createOverlayLabel(element, type) {
          if (element.querySelector('.herb-overlay-label')) {
              return;
          }
          const shortName = element.getAttribute('data-herb-debug-file-name') || '';
          const relativePath = element.getAttribute('data-herb-debug-file-relative-path') || shortName;
          const fullPath = element.getAttribute('data-herb-debug-file-full-path') || relativePath;
          const label = document.createElement('div');
          label.className = 'herb-overlay-label';
          label.textContent = shortName;
          label.setAttribute('data-label-setup', 'true');
          label.addEventListener('mouseenter', () => {
              label.textContent = relativePath;
              document.querySelectorAll('.herb-overlay-label').forEach(otherLabel => {
                  otherLabel.style.zIndex = '1000';
              });
              label.style.zIndex = '1002';
          });
          label.addEventListener('mouseleave', () => {
              label.textContent = shortName;
              label.style.zIndex = '1000';
          });
          label.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openFileInEditor(fullPath, 1, 1);
          });
          const shouldAttachToParent = element.getAttribute('data-herb-debug-attach-to-parent') === 'true';
          if (shouldAttachToParent && element.parentElement) {
              const parent = element.parentElement;
              element.style.outline = 'none';
              element.classList.remove('show-outline');
              const outlineColor = type === 'component' ? '#f59e0b' : type === 'partial' ? '#10b981' : '#3b82f6';
              parent.style.outline = `2px dotted ${outlineColor}`;
              parent.style.outlineOffset = parent.tagName.toLowerCase() === 'html' ? '-2px' : '2px';
              parent.classList.add('show-outline');
              parent.setAttribute('data-herb-debug-attached-outline-type', type);
              if (window.getComputedStyle(parent).position === 'static') {
                  parent.style.position = 'relative';
              }
              label.style.position = 'absolute';
              label.style.top = '0';
              label.style.left = '0';
              parent.appendChild(label);
              return;
          }
          if (element.localName === 'html' || window.getComputedStyle(element).overflowY !== 'visible') {
              label.style.top = '0';
          }
          if (window.getComputedStyle(element).position === 'static') {
              element.style.position = 'relative';
          }
          element.appendChild(label);
      }
      removeOverlayLabel(element) {
          const shouldAttachToParent = element.getAttribute('data-herb-debug-attach-to-parent') === 'true';
          if (shouldAttachToParent && element.parentElement) {
              const parent = element.parentElement;
              const label = parent.querySelector('.herb-overlay-label');
              if (label) {
                  label.remove();
              }
              parent.style.outline = 'none';
              parent.style.outlineOffset = '0';
              parent.classList.remove('show-outline');
              parent.removeAttribute('data-herb-debug-attached-outline-type');
          }
          else {
              const label = element.querySelector('.herb-overlay-label');
              if (label) {
                  label.remove();
              }
          }
      }
      resetShowingERB() {
          const elements = document.querySelectorAll('[data-herb-debug-showing-erb');
          elements.forEach(element => {
              const originalContent = element.getAttribute('data-herb-debug-original') || "";
              element.innerHTML = originalContent;
              element.removeAttribute("data-herb-debug-showing-erb");
          });
      }
      toggleERBTags(show) {
          this.showingERB = show !== undefined ? show : !this.showingERB;
          const erbOutputs = document.querySelectorAll('[data-herb-debug-outline-type*="erb-output"]');
          erbOutputs.forEach((element) => {
              const erbCode = element.getAttribute('data-herb-debug-erb');
              if (this.showingERB && erbCode) {
                  // this.resetShowingERB()
                  if (!element.hasAttribute('data-herb-debug-original')) {
                      element.setAttribute('data-herb-debug-original', element.innerHTML);
                  }
                  element.textContent = erbCode;
                  element.setAttribute("data-herb-debug-showing-erb", "true");
                  element.style.background = '#f3e8ff';
                  element.style.color = '#7c3aed';
                  if (this.showingTooltips) {
                      this.addTooltipHoverHandler(element);
                  }
              }
              else {
                  const originalContent = element.getAttribute('data-herb-debug-original') || "";
                  if (element && element.hasAttribute("data-herb-debug-showing-erb")) {
                      element.innerHTML = originalContent;
                      element.removeAttribute("data-herb-debug-showing-erb");
                  }
                  element.style.background = 'transparent';
                  element.style.color = 'inherit';
                  this.removeTooltipHoverHandler(element);
                  this.removeHoverTooltip(element);
              }
          });
          this.saveSettings();
      }
      toggleERBOutlines(show) {
          this.showingERBOutlines = show !== undefined ? show : !this.showingERBOutlines;
          this.clearCurrentHoveredERB();
          const erbOutputs = document.querySelectorAll('[data-herb-debug-outline-type*="erb-output"]');
          erbOutputs.forEach(element => {
              const inserted = element.hasAttribute("data-herb-debug-inserted");
              const needsWrapperToggled = (inserted && !element.children[0]);
              const realElement = element.children[0] || element;
              if (this.showingERBOutlines) {
                  realElement.style.outline = '2px dotted #a78bfa';
                  realElement.style.outlineOffset = '1px';
                  if (needsWrapperToggled) {
                      element.style.display = 'inline';
                  }
                  if (this.showingTooltips) {
                      this.addTooltipHoverHandler(element);
                  }
                  if (this.showingERBHoverReveal) {
                      this.addERBHoverReveal(element);
                  }
              }
              else {
                  realElement.style.outline = 'none';
                  realElement.style.outlineOffset = '0';
                  if (needsWrapperToggled) {
                      element.style.display = 'contents';
                  }
                  this.removeTooltipHoverHandler(element);
                  this.removeHoverTooltip(element);
                  this.removeERBHoverReveal(element);
              }
          });
          this.saveSettings();
      }
      updateNestedToggleVisibility() {
          const nestedToggle = document.getElementById('herbERBHoverRevealNested');
          const tooltipsNestedToggle = document.getElementById('herbTooltipsNested');
          if (nestedToggle) {
              nestedToggle.style.display = this.showingERBOutlines ? 'block' : 'none';
          }
          if (tooltipsNestedToggle) {
              tooltipsNestedToggle.style.display = this.showingERBOutlines ? 'block' : 'none';
          }
      }
      toggleERBHoverReveal(show) {
          this.showingERBHoverReveal = show !== undefined ? show : !this.showingERBHoverReveal;
          if (this.showingERBHoverReveal && this.showingTooltips) {
              this.toggleTooltips(false);
              const toggleTooltipsSwitch = document.getElementById('herbToggleTooltips');
              if (toggleTooltipsSwitch) {
                  toggleTooltipsSwitch.checked = false;
              }
          }
          this.clearCurrentHoveredERB();
          const erbOutputs = document.querySelectorAll('[data-herb-debug-outline-type*="erb-output"]');
          erbOutputs.forEach((el) => {
              const element = el;
              this.removeERBHoverReveal(element);
              if (this.showingERBHoverReveal && this.showingERBOutlines) {
                  this.addERBHoverReveal(element);
              }
          });
          this.saveSettings();
      }
      clearCurrentHoveredERB() {
          if (this.currentlyHoveredERBElement) {
              const handlers = this.currentlyHoveredERBElement._erbHoverHandlers;
              if (handlers) {
                  handlers.hideERBCode();
              }
              this.currentlyHoveredERBElement = null;
          }
      }
      addERBHoverReveal(element) {
          const erbCode = element.getAttribute('data-herb-debug-erb');
          if (!erbCode)
              return;
          this.removeERBHoverReveal(element);
          if (!element.hasAttribute('data-herb-debug-original')) {
              element.setAttribute('data-herb-debug-original', element.innerHTML);
          }
          const showERBCode = () => {
              if (!this.showingERBHoverReveal || !this.showingERBOutlines) {
                  return;
              }
              if (this.currentlyHoveredERBElement === element) {
                  return;
              }
              this.clearCurrentHoveredERB();
              this.currentlyHoveredERBElement = element;
              element.style.background = '#f3e8ff';
              element.style.color = '#7c3aed';
              element.style.fontFamily = 'inherit';
              element.style.fontSize = 'inherit';
              element.style.borderRadius = '3px';
              element.style.cursor = 'pointer';
              element.textContent = erbCode;
              element.addEventListener('click', this.handleRevealedERBClick);
          };
          const hideERBCode = () => {
              if (this.currentlyHoveredERBElement === element) {
                  this.currentlyHoveredERBElement = null;
              }
              const originalContent = element.getAttribute('data-herb-debug-original');
              if (originalContent) {
                  element.innerHTML = originalContent;
              }
              element.style.background = 'transparent';
              element.style.color = 'inherit';
              element.style.fontFamily = 'inherit';
              element.style.fontSize = 'inherit';
              element.style.borderRadius = '0';
              element.style.cursor = 'default';
              element.removeEventListener('click', this.handleRevealedERBClick);
          };
          element._erbHoverHandlers = { showERBCode, hideERBCode };
          element.addEventListener('mouseenter', showERBCode);
      }
      removeERBHoverReveal(element) {
          const handlers = element._erbHoverHandlers;
          if (handlers) {
              element.removeEventListener('mouseenter', handlers.showERBCode);
              delete element._erbHoverHandlers;
              handlers.hideERBCode();
          }
      }
      createHoverTooltip(element, elementForPosition) {
          this.removeHoverTooltip(element);
          const relativePath = element.getAttribute('data-herb-debug-file-relative-path') || element.getAttribute('data-herb-debug-file-name') || '';
          const fullPath = element.getAttribute('data-herb-debug-file-full-path') || relativePath;
          const line = element.getAttribute('data-herb-debug-line') || '';
          const column = element.getAttribute('data-herb-debug-column') || '';
          const erb = element.getAttribute('data-herb-debug-erb') || '';
          if (!relativePath || !erb)
              return;
          const tooltip = document.createElement('div');
          tooltip.className = 'herb-tooltip';
          tooltip.innerHTML = `
      <div class="herb-location" data-tooltip="Open in Editor">
        <span class="herb-file-path">${relativePath}:${line}:${column}</span>
        <button class="herb-copy-path-btn" data-tooltip="Copy file path">📋</button>
      </div>
      <div class="herb-erb-code">${erb}</div>
    `;
          let hideTimeout = null;
          const showTooltip = () => {
              if (hideTimeout) {
                  clearTimeout(hideTimeout);
                  hideTimeout = null;
              }
              tooltip.classList.add('visible');
          };
          const hideTooltip = () => {
              hideTimeout = window.setTimeout(() => {
                  tooltip.classList.remove('visible');
              }, 100);
          };
          element.addEventListener('mouseenter', showTooltip);
          element.addEventListener('mouseleave', hideTooltip);
          tooltip.addEventListener('mouseenter', showTooltip);
          tooltip.addEventListener('mouseleave', hideTooltip);
          const locationElement = tooltip.querySelector('.herb-location');
          const openInEditor = (e) => {
              if (e.target.closest('.herb-copy-path-btn')) {
                  return;
              }
              e.preventDefault();
              e.stopPropagation();
              this.openFileInEditor(fullPath, parseInt(line), parseInt(column));
          };
          locationElement?.addEventListener('click', openInEditor);
          const copyButton = tooltip.querySelector('.herb-copy-path-btn');
          const copyFilePath = (e) => {
              e.preventDefault();
              e.stopPropagation();
              const textToCopy = `${relativePath}:${line}:${column}`;
              navigator.clipboard.writeText(textToCopy).then(() => {
                  copyButton.textContent = '✅';
                  setTimeout(() => {
                      copyButton.textContent = '📋';
                  }, 1000);
              }).catch((err) => {
                  console.error('Failed to copy file path:', err);
              });
          };
          copyButton?.addEventListener('click', copyFilePath);
          const positionTooltip = () => {
              const elementRect = elementForPosition.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              const viewportWidth = window.innerWidth;
              tooltip.style.position = 'fixed';
              tooltip.style.left = '0';
              tooltip.style.top = '0';
              tooltip.style.transform = 'none';
              tooltip.style.bottom = 'auto';
              const actualTooltipRect = tooltip.getBoundingClientRect();
              const tooltipWidth = actualTooltipRect.width;
              const tooltipHeight = actualTooltipRect.height;
              let left = elementRect.left + (elementRect.width / 2) - (tooltipWidth / 2);
              let top = elementRect.top - tooltipHeight - 8;
              if (left < 8) {
                  left = 8;
              }
              else if (left + tooltipWidth > viewportWidth - 8) {
                  left = viewportWidth - tooltipWidth - 8;
              }
              if (top < 8) {
                  top = elementRect.bottom + 8;
                  if (top + tooltipHeight > viewportHeight - 8) {
                      top = Math.max(8, (viewportHeight - tooltipHeight) / 2);
                  }
              }
              if (top + tooltipHeight > viewportHeight - 8) {
                  top = viewportHeight - tooltipHeight - 8;
              }
              tooltip.style.position = 'fixed';
              tooltip.style.left = `${left}px`;
              tooltip.style.top = `${top}px`;
              tooltip.style.transform = 'none';
              tooltip.style.bottom = 'auto';
          };
          element._tooltipHandlers = { showTooltip, hideTooltip, openInEditor, copyFilePath, positionTooltip };
          tooltip._tooltipHandlers = { showTooltip, hideTooltip };
          element.appendChild(tooltip);
          setTimeout(positionTooltip, 0);
          window.addEventListener('scroll', positionTooltip, { passive: true });
          window.addEventListener('resize', positionTooltip, { passive: true });
      }
      removeHoverTooltip(element) {
          const tooltip = element.querySelector('.herb-tooltip');
          if (tooltip) {
              const handlers = element._tooltipHandlers;
              const tooltipHandlers = tooltip._tooltipHandlers;
              if (handlers) {
                  element.removeEventListener('mouseenter', handlers.showTooltip);
                  element.removeEventListener('mouseleave', handlers.hideTooltip);
                  const locationElement = tooltip.querySelector('.herb-location');
                  locationElement?.removeEventListener('click', handlers.openInEditor);
                  const copyButton = tooltip.querySelector('.herb-copy-path-btn');
                  copyButton?.removeEventListener('click', handlers.copyFilePath);
                  if (handlers.positionTooltip) {
                      window.removeEventListener('scroll', handlers.positionTooltip);
                      window.removeEventListener('resize', handlers.positionTooltip);
                  }
                  delete element._tooltipHandlers;
              }
              if (tooltipHandlers) {
                  tooltip.removeEventListener('mouseenter', tooltipHandlers.showTooltip);
                  tooltip.removeEventListener('mouseleave', tooltipHandlers.hideTooltip);
                  delete tooltip._tooltipHandlers;
              }
              tooltip.remove();
          }
      }
      addTooltipHoverHandler(element) {
          this.removeTooltipHoverHandler(element);
          const lazyTooltipHandler = () => {
              if (!this.showingTooltips || !this.showingERBOutlines) {
                  return;
              }
              if (element.querySelector('.herb-tooltip')) {
                  return;
              }
              this.createHoverTooltip(element, element);
          };
          element._lazyTooltipHandler = lazyTooltipHandler;
          element.addEventListener('mouseenter', lazyTooltipHandler);
      }
      removeTooltipHoverHandler(element) {
          const handler = element._lazyTooltipHandler;
          if (handler) {
              element.removeEventListener('mouseenter', handler);
              delete element._lazyTooltipHandler;
          }
      }
      getEditorUrl(editor, absolutePath, line, column) {
          switch (editor) {
              case 'cursor':
                  return `cursor://file/${absolutePath}:${line}:${column}`;
              case 'vscode':
                  return `vscode://file/${absolutePath}:${line}:${column}`;
              case 'vscodium':
                  return `vscodium://file/${absolutePath}:${line}:${column}`;
              case 'zed':
                  return `zed://file/${absolutePath}:${line}:${column}`;
              case 'windsurf':
                  return `windsurf://file/${absolutePath}:${line}:${column}`;
              case 'sublime':
                  return `subl://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              case 'atom':
                  return `atom://core/open/file?filename=${absolutePath}&line=${line}&column=${column}`;
              case 'textmate':
                  return `txmt://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              case 'emacs':
                  return `emacs://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              case 'idea':
                  return `idea://open?file=${absolutePath}&line=${line}&column=${column}`;
              case 'rubymine':
                  return `x-mine://open?file=${absolutePath}&line=${line}&column=${column}`;
              case 'nova':
                  return `nova://open?path=${absolutePath}&line=${line}&column=${column}`;
              case 'macvim':
                  return `mvim://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              case 'vim':
                  return `vim://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              case 'nvim':
                  return `nvim://open?url=file://${absolutePath}&line=${line}&column=${column}`;
              default:
                  return '';
          }
      }
      openFileInEditor(file, line, column) {
          const absolutePath = file.startsWith('/') ? file : (this.projectPath ? `${this.projectPath}/${file}` : file);
          const editorToUse = this.preferredEditor === 'auto' ? this.defaultEditorFromServer : this.preferredEditor;
          const url = this.getEditorUrl(editorToUse, absolutePath, line, column);
          if (url) {
              try {
                  window.open(url, '_self');
              }
              catch (error) {
                  console.log(`Open in editor: ${absolutePath}:${line}:${column}`);
              }
          }
          else {
              console.log(`Open in editor: ${absolutePath}:${line}:${column}`);
          }
      }
      toggleTooltips(show) {
          this.showingTooltips = show !== undefined ? show : !this.showingTooltips;
          if (this.showingTooltips && this.showingERBHoverReveal) {
              this.toggleERBHoverReveal(false);
              const toggleERBHoverRevealSwitch = document.getElementById('herbToggleERBHoverReveal');
              if (toggleERBHoverRevealSwitch) {
                  toggleERBHoverRevealSwitch.checked = false;
              }
          }
          const erbOutputs = document.querySelectorAll('[data-herb-debug-outline-type*="erb-output"]');
          erbOutputs.forEach((element) => {
              if (this.showingERBOutlines && this.showingTooltips) {
                  this.addTooltipHoverHandler(element);
              }
              else {
                  this.removeTooltipHoverHandler(element);
                  this.removeHoverTooltip(element);
              }
          });
          this.saveSettings();
      }
      disableAll() {
          this.clearCurrentHoveredERB();
          this.toggleViewOutlines(false);
          this.togglePartialOutlines(false);
          this.toggleComponentOutlines(false);
          this.toggleERBTags(false);
          this.toggleERBOutlines(false);
          this.toggleERBHoverReveal(false);
          this.toggleTooltips(false);
          const toggleViewOutlinesSwitch = document.getElementById('herbToggleViewOutlines');
          const togglePartialOutlinesSwitch = document.getElementById('herbTogglePartialOutlines');
          const toggleComponentOutlinesSwitch = document.getElementById('herbToggleComponentOutlines');
          const toggleERBSwitch = document.getElementById('herbToggleERB');
          const toggleERBOutlinesSwitch = document.getElementById('herbToggleERBOutlines');
          const toggleERBHoverRevealSwitch = document.getElementById('herbToggleERBHoverReveal');
          const toggleTooltipsSwitch = document.getElementById('herbToggleTooltips');
          if (toggleViewOutlinesSwitch)
              toggleViewOutlinesSwitch.checked = false;
          if (togglePartialOutlinesSwitch)
              togglePartialOutlinesSwitch.checked = false;
          if (toggleComponentOutlinesSwitch)
              toggleComponentOutlinesSwitch.checked = false;
          if (toggleERBSwitch)
              toggleERBSwitch.checked = false;
          if (toggleERBOutlinesSwitch)
              toggleERBOutlinesSwitch.checked = false;
          if (toggleERBHoverRevealSwitch)
              toggleERBHoverRevealSwitch.checked = false;
          if (toggleTooltipsSwitch)
              toggleTooltipsSwitch.checked = false;
      }
      initializeErrorOverlay() {
          this.errorOverlay = new ErrorOverlay();
      }
  }
  HerbOverlay.SETTINGS_KEY = 'herb-dev-tools-settings';
  HerbOverlay.EDITOR_OPTIONS = [
      { value: 'auto', label: 'Auto (from server via RAILS_EDITOR or EDITOR)' },
      { value: 'atom', label: 'Atom' },
      { value: 'cursor', label: 'Cursor' },
      { value: 'emacs', label: 'Emacs' },
      { value: 'idea', label: 'IntelliJ IDEA' },
      { value: 'macvim', label: 'MacVim' },
      { value: 'nova', label: 'Nova' },
      { value: 'nvim', label: 'Neovim' },
      { value: 'rubymine', label: 'RubyMine' },
      { value: 'sublime', label: 'Sublime Text' },
      { value: 'textmate', label: 'TextMate' },
      { value: 'vim', label: 'Vim' },
      { value: 'vscode', label: 'Visual Studio Code' },
      { value: 'vscodium', label: 'VSCodium' },
      { value: 'windsurf', label: 'Windsurf' },
      { value: 'zed', label: 'Zed' },
  ];

  function initHerbDevTools(options = {}) {
      return new HerbOverlay(options);
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const hasDebugMode = document.querySelector('meta[name="herb-debug-mode"]')?.getAttribute('content') === 'true';
      const hasDebugErb = document.querySelector('[data-herb-debug-erb]') !== null;
      const hasValidationErrors = document.querySelector('template[data-herb-validation-errors]') !== null;
      const hasValidationError = document.querySelector('template[data-herb-validation-error]') !== null;
      const hasParserErrors = document.querySelector('template[data-herb-parser-error]') !== null;
      const shouldAutoInit = hasDebugMode || hasDebugErb || hasValidationErrors || hasValidationError || hasParserErrors;
      if (shouldAutoInit) {
          document.addEventListener('DOMContentLoaded', () => {
              initHerbDevTools();
          });
      }
  }
  if (typeof window !== 'undefined') {
      window.HerbDevTools = {
          init: initHerbDevTools,
          HerbOverlay
      };
  }

  class ReActionViewDevTools {
      constructor(options = {}) {
          this.options = options;
          this.herbOverlay = null;
          if (options.autoInit !== false) {
              this.init();
          }
      }
      init() {
          if (this.herbOverlay) {
              this.destroy();
          }
          this.herbOverlay = initHerbDevTools({
              projectPath: this.options.projectPath,
              ...this.options
          });
          return this.herbOverlay;
      }
      destroy() {
          if (this.herbOverlay) {
              const existingMenu = document.querySelector(".herb-floating-menu");
              if (existingMenu) {
                  existingMenu.remove();
              }
          }
          this.herbOverlay = null;
      }
      getHerbOverlay() {
          return this.herbOverlay;
      }
      static getInstance() {
          return ReActionViewDevTools.instance;
      }
      static setInstance(instance) {
          ReActionViewDevTools.instance = instance;
      }
  }
  ReActionViewDevTools.instance = null;
  function initReActionViewDevTools(options = {}) {
      const existingInstance = ReActionViewDevTools.getInstance();
      if (existingInstance) {
          existingInstance.destroy();
      }
      const instance = new ReActionViewDevTools(options);
      ReActionViewDevTools.setInstance(instance);
      return instance;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
      let isInitializing = false;
      const initializeDevTools = () => {
          var _a, _b;
          if (isInitializing) {
              console.log("ReActionView dev tools initialization already in progress, skipping...");
              return;
          }
          const shouldAutoInit = ((_a = document.querySelector(`meta[name="herb-debug-mode"]`)) === null || _a === void 0 ? void 0 : _a.getAttribute("content")) === "true" || document.querySelector("[data-herb-debug-erb]") !== null;
          if (!shouldAutoInit) {
              console.log("ReActionView debug mode not detected, skipping dev tools initialization");
              return;
          }
          isInitializing = true;
          try {
              let projectPath;
              const railsRoot = (_b = document.querySelector(`meta[name="herb-rails-root"]`)) === null || _b === void 0 ? void 0 : _b.getAttribute("content");
              if (railsRoot) {
                  projectPath = railsRoot;
              }
              initReActionViewDevTools({
                  projectPath,
                  autoInit: true
              });
          }
          catch (error) {
              console.warn("Could not initialize ReActionView dev tools:", error);
          }
          finally {
              isInitializing = false;
          }
      };
      if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", initializeDevTools, { once: true });
      }
      else {
          setTimeout(initializeDevTools, 0);
      }
      document.addEventListener("turbo:load", initializeDevTools);
      document.addEventListener("turbo:render", initializeDevTools);
      document.addEventListener("turbo:visit", initializeDevTools);
  }
  if (typeof window !== "undefined") {
      window.ReActionViewDevTools = {
          init: initReActionViewDevTools,
          ReActionViewDevTools,
          HerbOverlay
      };
  }

  exports.HerbOverlay = HerbOverlay;
  exports.ReActionViewDevTools = ReActionViewDevTools;
  exports.initReActionViewDevTools = initReActionViewDevTools;

}));
//# sourceMappingURL=reactionview-dev-tools.umd.js.map

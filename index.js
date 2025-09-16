import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';

self.MonacoEnvironment = {
  getWorkerUrl: function(module_id, label) {
    if (label === 'json') {
      return './vs/language/json/json.worker.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './vs/language/css/css.worker.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './vs/language/html/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './vs/language/typescript/ts.worker.js';
    }
    return './vs/editor/editor.worker.js';
  }
};

const container = document.getElementById('container');

monaco.editor.create(container, {
  value: '',
  placeholder: '',
  language: 'plaintext',
  theme: 'vs-dark',
  contextmenu: true,
  automaticLayout: true,
  'bracketPairColorization.enabled': false,
  colorDecorators: false,
  colorDecoratorsActivatedOn: 'click',
  folding: true,
  fontFamily: 'Menlo, Consolas, "DejaVu Sans Mono", monospace',
  fontSize: 13,
  guides: {
    indentation: false
  },
  insertSpaces: true,
  lineHeight: 1.45,
  lineNumbers: 'on',
  links: true,
  matchBrackets: 'near',
  minimap: {
    enabled: false
  },
  occurrencesHighlight: 'off',
  renderWhitespace: 'none',
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  showDeprecated: false,
  tabSize: 2
});

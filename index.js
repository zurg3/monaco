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

const current_url = new URL(window.location);
const params = Object.fromEntries(current_url.searchParams.entries());

const container = document.getElementById('container');

const lang = params.lang ? params.lang : 'plaintext';

monaco.editor.create(container, {
  value: '',
  placeholder: '',
  language: lang,
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

container.onkeydown = (e) => {
  if (e.ctrlKey && e.code === 'KeyO') {
    e.preventDefault();
    const data = localStorage.getItem('monaco_data') || '';
    editor.setValue(data);
  }
  else if (e.ctrlKey && e.code === 'KeyS') {
    e.preventDefault();
    const data = editor.getValue();
    localStorage.setItem('monaco_data', data);
  }
};

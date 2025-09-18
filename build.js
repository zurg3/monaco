const esbuild = require('esbuild');
const path = require('path');

const workers = [
  'vs/language/json/json.worker.js',
  'vs/language/css/css.worker.js',
  'vs/language/html/html.worker.js',
  'vs/language/typescript/ts.worker.js',
  'vs/editor/editor.worker.js'
];

esbuild.build({
  entryPoints: workers.map((entry) => `node_modules/monaco-editor/esm/${entry}`),
  bundle: true,
  minify: true,
  format: 'iife',
  outbase: 'node_modules/monaco-editor/esm',
  outdir: path.join(__dirname, 'dist')
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  outdir: path.join(__dirname, 'dist'),
  loader: {
    '.ttf': 'file'
  }
}).catch(() => process.exit(1));

const fs = require('fs');
const path = require('path');

const clientDir = path.resolve(__dirname, '..', 'dist', 'client');
const outDir = path.resolve(__dirname, '..', 'dist');
const assetsSrc = path.join(clientDir, 'assets');
const assetsOut = path.join(outDir, 'assets');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

if (!fs.existsSync(clientDir)) {
  console.error('Expected client build at', clientDir);
  process.exit(1);
}

ensureDir(outDir);
ensureDir(assetsOut);

const files = fs.readdirSync(assetsSrc).filter((f) => !f.startsWith('.'));
files.forEach((f) => {
  fs.copyFileSync(path.join(assetsSrc, f), path.join(assetsOut, f));
});

const cssFiles = files.filter((f) => f.endsWith('.css'));
const jsFiles = files.filter((f) => f.endsWith('.js'));

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>STUPADEL</title>
    ${cssFiles.map((c) => `<link rel="stylesheet" href="./assets/${c}">`).join('\n    ')}
  </head>
  <body>
    <div id="root"></div>
    ${jsFiles.map((s) => `<script type="module" src="./assets/${s}"></script>`).join('\n    ')}
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
console.log('Wrote', path.join(outDir, 'index.html'));

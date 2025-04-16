import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { sync } from 'glob';
import { minify } from 'html-minifier';
import JSZip from "jszip";
import obfs from 'javascript-obfuscator';
import pkg from '../package.json' with { type: 'json' };

const { version } = pkg;
const { obfuscate } = obfs;

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/');
const MY_PATH = join(__dirname, '../my/');

async function processHtmlPages() {
    const indexFiles = sync('**/index.html', { cwd: ASSET_PATH });
    const result = {};

    for (const relativeIndexPath of indexFiles) {
        const dir = pathDirname(relativeIndexPath);
        const base = (file) => join(ASSET_PATH, dir, file);

        const indexHtml = readFileSync(base('index.html'), 'utf8');
        const styleCode = readFileSync(base('style.css'), 'utf8');
        const scriptCode = readFileSync(base('script.js'), 'utf8');

        const finalHtml = indexHtml
            .replace(/__STYLE__/g, `<style>${styleCode}</style>`)
            .replace(/__SCRIPT__/g, scriptCode)
            .replace(/__PANEL_VERSION__/g, version);

        const minifiedHtml = minify(finalHtml, {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            minifyCSS: true,
            minifyJS: true
        });

        result[dir] = JSON.stringify(minifiedHtml);
    }

    console.log('✅ Assets bundled successfuly!');
    return result;
}

async function buildWorker() {

    const htmls = await processHtmlPages();
    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

    const code = await build({
        entryPoints: [join(__dirname, '../src/worker.js')],
        bundle: true,
        format: 'esm',
        write: false,
        minifySyntax: true,
        external: ['cloudflare:sockets'],
        platform: 'node',
        define: {
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __PANEL_VERSION__: JSON.stringify(version)
        }
    });

    console.log('✅ Worker built successfuly!');
    const finalCode = code.outputFiles[0].text.replace(/\/\*[\s\S]*?\*\//g, '');

    /*const obfuscationResult = obfuscate(finalCode, {
        "stringArrayThreshold": 1,
        "stringArrayEncoding": [
            "rc4"
        ],
        "numbersToExpressions": true,
        "transformObjectKeys": true,
        "renameGlobals": true,
        "deadCodeInjection": true,
        "deadCodeInjectionThreshold": 0.3,
        "simplify": true,
        "compact": true,
        "target": "node"
    });*/

    //const worker = obfuscationResult.getObfuscatedCode();
//    mkdirSync(MY_PATH, { recursive: true });
 //   writeFileSync('./my/worker.js', finalCode, 'utf8');

const dirPath = join(__dirname, 'my');
const filePath = join(dirPath, 'worker.js');

// Create the directory if it doesn't exist
if (!existsSync(dirPath)) {
  mkdirSync(dirPath, { recursive: true });
  console.log(`Directory created: ${dirPath}`);
}

// Create and write to the file

writeFileSync(filePath, finalCode, 'utf8');
console.log(`File created: ${filePath}`);

    
    /*const zip = new JSZip();
    zip.file('_worker.js', worker);
    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE'
    }).then(nodebuffer => writeFileSync('./dist/worker.zip', nodebuffer));*/

    console.log('✅ Worker obfuscated successfuly!');
}

buildWorker().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});

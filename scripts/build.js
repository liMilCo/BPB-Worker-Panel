import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { globSync } from 'glob';
import { minify as jsMinify } from 'terser';
import { minify as htmlMinify } from 'html-minifier';
import JSZip from "jszip";
import obfs from 'javascript-obfuscator';
import pkg from '../package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/');

const version = pkg.version;

async function processHtmlPages() {
    const indexFiles = globSync('**/index.html', { cwd: ASSET_PATH });
    const result = {};
    const result_full = {};

    for (const relativeIndexPath of indexFiles) {
        const dir = pathDirname(relativeIndexPath);
        const base = (file) => join(ASSET_PATH, dir, file);

        const indexHtml = readFileSync(base('index.html'), 'utf8');
        let finalHtml = indexHtml.replaceAll('__VERSION__', version);
        let finalHtml_full = finalHtml;

        if (dir !== 'error') {
            const styleCode = readFileSync(base('style.css'), 'utf8');
            const scriptCode_ = readFileSync(base('script.js'), 'utf8');
            //const scriptCode = scriptCode_.replaceAll('\'$\'', `atob("JA==")`);
            const scriptCode = scriptCode_.replaceAll('\'$\'', `"$"`);
        
            const finalScriptCode = await jsMinify(scriptCode);
            finalHtml = finalHtml
                .replaceAll('__STYLE__', `<style>${styleCode}</style>`)
                .replaceAll('__SCRIPT__', finalScriptCode.code);

            finalHtml_full = finalHtml_full
                .replaceAll('__STYLE__', `<style>${styleCode}</style>`)
                .replaceAll('__SCRIPT__', scriptCode);
            
        }
        const minifiedHtml = htmlMinify(finalHtml, {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            minifyCSS: true
        });

        const encodedHtml = Buffer.from(minifiedHtml, 'utf8').toString('base64');
        result[dir] = JSON.stringify(encodedHtml);



        const encodedHtml_full = Buffer.from(finalHtml_full, 'utf8').toString('base64');
        result_full[dir] = JSON.stringify(encodedHtml_full);
    }

    console.log('✅ Assets bundled successfuly!');
    //return result;
    return {"full":result_full, "mini":result};
}

async function buildWorker() {

    const htmlss = await processHtmlPages();
    const htmls_full = htmlss.full;
    const htmls = htmlss.mini;

    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

    const code = await build({
        entryPoints: [join(__dirname, '../src/worker.js')],
        bundle: true,
        format: 'esm',
        write: false,
        external: ['cloudflare:sockets'],
        platform: 'browser',
        target: 'es2020',
        define: {
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __VERSION__: JSON.stringify(version)
        }
    });
 
    const code_full = await build({
        entryPoints: [join(__dirname, '../src/worker.js')],
        bundle: true,
        format: 'esm',
        write: false,
        external: ['cloudflare:sockets'],
        platform: 'browser',
        target: 'es2020',
        define: {
            __PANEL_HTML_CONTENT__: htmls_full['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls_full['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls_full['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls_full['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __VERSION__: JSON.stringify(version)
        }
    });

    console.log('✅ built successfuly!');

    const minifiedCode = await jsMinify(code.outputFiles[0].text, {
        module: true,
        output: {
            comments: false
        }
    });

    const FullCode = code_full.outputFiles[0].text;

    console.log('✅ Minified successfuly!');

    /*const obfuscationResult = obfs.obfuscate(minifiedCode.code, {
        stringArrayThreshold: 1,
        stringArrayEncoding: [
            "rc4"
        ],
        numbersToExpressions: true,
        transformObjectKeys: true,
        renameGlobals: true,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.2,
        simplify: true,
        compact: true,
        target: "node"
    });*/


    const worker = `// @ts-nocheck\n${minifiedCode.code}`; //obfuscationResult.getObfuscatedCode();

    const worker_full = `// @ts-nocheck\n${FullCode}`;

    console.log('✅ Created successfuly!');

    mkdirSync(DIST_PATH, { recursive: true });
    writeFileSync('./dist/worker.minify.js', worker, 'utf8');
    writeFileSync('./dist/worker.rebuild.js', worker_full, 'utf8');
/*
    const zip = new JSZip();
    zip.file('_worker.js', worker);
    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE'
    }).then(nodebuffer => writeFileSync('./dist/worker.zip', nodebuffer));
*/
    console.log('✅ Done!');
}

buildWorker().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});

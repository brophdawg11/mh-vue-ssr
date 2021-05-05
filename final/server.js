const fs = require('fs');
const path = require('path');

const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

const template = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8');
const bundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(bundle, {
    template,
    clientManifest,
    runInNewContext: false,
});

app.get(/\./, express.static(path.resolve(__dirname, '../dist/')));

app.get('*', (req, res) => {
    const context = {
        url: req.url,
        clientManifest,
    };

    res.setHeader('Content-Type', 'text/html');

    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.status(500).send('500 | Internal Server Error');
            console.error(err);
            console.error(err.stack);
        } else {
            res.send(html);
        }
    });
});

const server = app.listen(8080, () => {
    console.log(`Server listening at http://localhost:${server.address().port}/`);
});

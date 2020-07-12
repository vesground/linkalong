const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const { JSDOM } = require('jsdom');

const template = require('fs').readFileSync(
  path.join(__dirname, '../config/index.html'),
  'utf-8',
);

const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const server = express();

// Mock the browser for node
const DOM = new JSDOM(template);
global.window = DOM.window;
global.document = DOM.window.document;
global.navigator = {
	userAgent: 'node.js',
};

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
  inject: false,
});

server.use('/dist', express.static(path.join(__dirname, '../dist')));
server.use('/', express.static(path.join(__dirname, '../public')));

server.get('*', async (req, res) => {
  const context = { url: req.url };

  try {
    const html = await renderer.renderToString(context);

    res.end(html);
  } catch (err) {
    console.error(err);
    if (err) {
      if (+err.message === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }
    }
  }
});

server.listen(process.env.PORT || 3000);

const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const { routes } = require('./proxyconfig.json');
const port = 3000;

// Host static personal site
app.use('/', express.static('public/personal-site'));

app.use('/github-access', proxy({target: 'http://localhost:3006', changeOrigin: true}));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const { routes } = require('./proxyconfig.json');
const port = 8000;

// Host static personal site
app.use('/', express.static('public'));

// Host routes for personal apps as defined in
for (route of routes) {
    app.use(route.route,
        proxy({
            target: route.address,
            pathRewrite: (path, req) => {
                return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
            }
        })
    );
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

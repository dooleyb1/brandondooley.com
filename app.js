const express = require('express');

const app = express();

const port = 8080;

// Host static personal site
app.use('/', express.static('public/personal-site'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var express = require('express'),
    path = require('path');

var router = express.Router();

var colors = ['rec', 'green', 'blue'];

router.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/colors', (req, resp) => {
    resp.send(colors);
});

module.exports = router;
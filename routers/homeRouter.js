var express = require('express'),
    path = require('path');

var router = express.Router();

var colors = ['rec', 'green', 'blue'];

router.get('/', (req, resp) => {
    resp.render('index', {
        name: 'Pradip ko laptop',
        colors: colors
    });
});

router.get('/colors', (req, resp) => {
    resp.send(colors);
});

module.exports = router;
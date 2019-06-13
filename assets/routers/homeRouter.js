var express = require('express');

var router = express.Router();

router.get('/', (req, resp) => {
    resp.send('<h1>Home</h1>');
});

module.exports = router;
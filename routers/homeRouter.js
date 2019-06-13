var express = require('express'),
    path = require('path');

var router = express.Router();

router.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
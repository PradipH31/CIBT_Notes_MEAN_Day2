var express = require('express');
var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

var router = express.Router();

router.get('/', (req, resp) => {
    resp.send('<h1>Events</h1>');
});

module.exports = router;
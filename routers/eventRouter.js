var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

router.get('/', (req, resp) => {
    var sql = 'select * from tbl_events';
    db.query(sql, function(err, result) {
        resp.render('events/index', {
            'events': result
        });
    });
});

module.exports = router;
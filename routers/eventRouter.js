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
    var sqlCamp = 'select * from tbl_campaigns';
    db.query(sql, function(err, event_result) {
        db.query(sqlCamp, function(err, cmap_result) {
            resp.render('events/index', {
                'events': event_result,
                'campaigns': cmap_result
            });
        });
    });
});

module.exports = router;
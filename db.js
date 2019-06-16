var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

var sql = 'select * from tbl_events where id=?';

db.query(sql, [1], function(err, result) {
    console.log(result);
});
var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

var sql = 'insert into tbl_events(event_name, start_date, end_date)' +
    ' values(?, ?, ?)';

db.query(sql, ['Japan Festival', '2019-07-07', '2019-07-07'], function(err, result) {
    console.log(result);
});
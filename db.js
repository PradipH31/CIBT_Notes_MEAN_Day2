var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

var sql = 'select * from tbl_events';

db.query(sql, function(err, result) {
    console.log(result);
    console.log('---------------------------');
    result.forEach((row, i) => {
        console.log(row.event_name);
    });
});
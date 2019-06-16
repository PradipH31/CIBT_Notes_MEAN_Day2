var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});
module.exports = db;
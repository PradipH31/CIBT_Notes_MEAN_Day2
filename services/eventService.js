var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    database: 'crm',
    user: 'root',
    password: ''
});

module.exports = function() {
    return {
        getAll: function(callback) {
            var sql = 'select * from tbl_events';
            db.query(sql, function(err, result) {
                callback(result);
            });
        }
    };
};
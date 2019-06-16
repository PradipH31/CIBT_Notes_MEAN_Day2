var db = require('../utils/db');
module.exports = function() {
    return {
        getAll: function(callback) {
            var sql = 'select * from tbl_events';
            db.query(sql, function(err, result) {
                callback(result);
            });
        },
        insert: function(data, callback) {
            var sql = "insert into tbl_events(event_name,start_date,end_date)" +
                " values(?,?,?)";
            db.query(sql, data, function(err, result) {
                callback(result);
            });
        }
    };
};
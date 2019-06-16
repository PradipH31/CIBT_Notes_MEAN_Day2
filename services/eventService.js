var db = require('../utils/db');
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
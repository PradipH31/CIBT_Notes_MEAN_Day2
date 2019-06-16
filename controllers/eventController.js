var EventService = require('../services/eventService');
var service = new EventService();

module.exports.EventController = function() {
    return {
        index: (req, resp) => {
            service.getAll(function(result) {
                resp.render('events/index', {
                    'events': result
                });
            });
        },
        add: (req, resp) => {
            var data = [
                req.body.event_name, req.body.start_date, req.body.end_date
            ];
            service.insert(data, function(result) {
                resp.redirect('/events');
            });
        }
    }
};
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
        }
    }
};
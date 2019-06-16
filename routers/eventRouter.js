var express = require('express');
var router = express.Router();
var controller = require('../controllers/eventController');
var eventController = new controller.EventController();

router.get('/', (req, resp) => {
    eventController.index(req, resp);
});

module.exports = router;
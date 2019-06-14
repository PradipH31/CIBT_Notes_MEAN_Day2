var express = require('express'),
    path = require('path');

var controller = require('../controllers/homeController');
var homeController = new controller.HomeController();

var router = express.Router();

router.get('/', (req, resp) => {
    homeController.index(req, resp);
});

router.get('/about', (req, resp) => {
    homeController.about(req, resp);
});

module.exports = router;
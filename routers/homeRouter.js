var express = require('express'),
    path = require('path');

var router = express.Router();
var controller = require('../controllers/homeController');
var homeController = new controller.HomeController();

router.get('/', (req, resp) => {
    homeController.index(req, resp);
});

router.get('/about', (req, resp) => {
    homeController.about(req, resp);
});

router.post('/subscribe', (req, resp) => {
    homeController.subscribe(req, resp);
});

router.get('/scrap', (req, resp) => {
    homeController.scrap(req, resp);
});

module.exports = router;
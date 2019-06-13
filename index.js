var express = require('express'),
    path = require('path');

var app = express();
var viewPath = path.join(__dirname, "views");

app.get('/', (req, resp) => {
    resp.sendFile(viewPath + '/index.html');
});

app.get('/about', (req, resp) => {
    resp.sendFile(viewPath + '/about.html');
});

app.listen(9000, () => {
    console.log('server running at port 9000');
})
var express = require('express'),
    path = require('path');

var app = express();
var viewPath = path.join(__dirname, "views");

app.set('port', 9000);

app.get('/', (req, resp) => {
    resp.sendFile(viewPath + '/index.html');
});

app.get('/about', (req, resp) => {
    resp.sendFile(viewPath + '/about.html');
});

app.listen(app.get('port'), () => {
    console.log('server running at port %d', app.get('port'));
})
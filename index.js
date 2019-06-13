var express = require('express'),
    path = require('path'),
    http = require('http');

var homeRouter = require('./routers/homeRouter');

var app = express();

app.set('port', 9000);
app.use('/static', express.static(path.join(__dirname, 'assets')));

app.use('/', homeRouter);

var server = http.createServer(app);

server.on('connection', (socket) => {
    socket.on('connect', () => {
        console.log('Connection request form %s', socket.remoteAddress);
    })
});

server.listen(app.get('port'), () => {
    console.log('Server running at port %d', app.get('port'));
});
var express = require('express'),
    path = require('path'),
    http = require('http'),
    bodyParser = require('body-parser');

var app = express();

app.set('port', 9000);
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());;
app.use(bodyParser.urlencoded({ extended: true }));

var homeRouter = require('./routers/homeRouter');
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
var path = require('path'),
    fs = require('fs'),
    http = require('http');

var port = 9000;
var server = http.createServer(function(req, resp) {
    resp.write("<h1>Hello from Node Server");
    resp.end();
});

server.on('connection', (socket) => {
    console.log('Connection request from %s', socket.remoteAddress);
});

server.listen(port, () => {
    console.log("Server is running at %d", port);
})
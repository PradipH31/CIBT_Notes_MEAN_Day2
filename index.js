var path = require('path'),
    fs = require('fs'),
    http = require('http');

var port = 9000;
var viewPath = path.join(__dirname, "views");
var server = http.createServer(function(req, resp) {
    fs.readFile(viewPath + "/index.html", (err, data) => {
        resp.write(data);
        resp.end();
    });
});

server.on('connection', (socket) => {
    console.log('Connection request from %s', socket.remoteAddress);
});

server.listen(port, () => {
    console.log("Server is running at %d", port);
})
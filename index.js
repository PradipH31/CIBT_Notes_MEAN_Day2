var path = require('path'),
    fs = require('fs'),
    http = require('http');

var port = 9000;
var viewPath = path.join(__dirname, "views");
var server = http.createServer(function(req, resp) {

    var method = req.method;
    console.log(method);
    var servlet = new Servlet(req, resp);
    switch (method.toUpperCase()) {
        case 'GET':
            servlet.doGet();
            break;
        case 'POST':
            servlet.doPost();
            break;
    }

});

function Servlet(req, resp) {
    this.doGet = function() {
        fs.readFile(viewPath + "/index.html", (err, data) => {
            resp.write(data);
            resp.end();
        });
    }
    this.doPost = function() {
        resp.write("<h1>Thank you for submitting</h1>");
        resp.end();
    }
}

server.on('connection', (socket) => {
    console.log('Connection request from %s', socket.remoteAddress);
});

server.listen(port, () => {
    console.log("Server is running at %d", port);
})
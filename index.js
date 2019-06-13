var path = require('path'),
    fs = require('fs'),
    http = require('http');

var port = 9000;
var viewPath = path.join(__dirname, "views");
var server = http.createServer(function(req, resp) {

    var method = req.method;
    console.log(method);
    var servlet = new Servlet();
    switch (method.toUpperCase()) {
        case 'GET':
            servlet.doGet(req, resp);
            break;
        case 'POST':
            servlet.doPost(req, resp);
            break;
    }

});

function Servlet() {
    this.doGet = function(req, resp) {
        fs.readFile(viewPath + "/index.html", (err, data) => {
            resp.write(data);
            resp.end();
        });
    }
    this.doPost = function(req, resp) {
        resp.write("<h1>Thank you for submitting</h1>");
    }
}

server.on('connection', (socket) => {
    console.log('Connection request from %s', socket.remoteAddress);
});

server.listen(port, () => {
    console.log("Server is running at %d", port);
})
var express = require('express'),
    path = require('path');

var app = express();
var viewPath = path.join(__dirname, "views");

app.set('port', 9000);
app.use('/static', express.static(path.join(__dirname, 'assets')));
customers = [{ id: 1, name: 'Pradip' },
    { id: 2, name: 'Akash' }
];

app.get('/', (req, resp) => {
    resp.sendFile(viewPath + '/index.html');
});

app.get('/customers', (req, resp) => {
    resp.setHeader('Content-Type', 'Application/json');
    resp.send(customers);
});

app.get('/customers/detail/:id', (req, resp) => {
    resp.send('<h1>Customer Detail</h1>Customer Id: ' + req.params.id);
});

app.get('/colors', (req, resp) => {
    resp.send(colors);
});

app.get('/about', (req, resp) => {
    resp.redirect('/customers');
});

app.listen(app.get('port'), () => {
    console.log('server running at port %d', app.get('port'));
})
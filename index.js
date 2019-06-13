var express = require('express');

var app = express();

app.get('/', (req, resp) => {
    resp.send('<h1>Hello from Express Framework</h1>');
});

app.get('/about', (req, resp) => {
    resp.send('<h1>About Us</h1>');
});

app.listen(9000, () => {
    console.log('server running at port 9000');
})
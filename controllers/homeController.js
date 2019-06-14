module.exports.HomeController = function() {
    return {
        index: function(req, resp) {
            resp.render('index', {
                name: 'Pradip ko laptop',
                colors: ['red', 'blue', 'green']
            });
        },
        about: function(req, resp) {
            resp.send('<h1>About Us</h1>')
        }
    };
};
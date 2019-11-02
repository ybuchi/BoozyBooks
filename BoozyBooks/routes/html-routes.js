// maybe require db

module.exports = function(app){
    // root route
    require('./html-routes/home-route')

    //sign up
    app.get('/signup', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    // home with user
    app.get('/dashboard', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    //sign up
    app.get('/signup', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    // blog
    app.get('/blog', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    // meetups
    app.get('/meetup', (req, res) => {
        res.render('index', { layout: 'landing' })
    });
    



}
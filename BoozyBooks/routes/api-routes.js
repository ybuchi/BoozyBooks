// require db


module.exports = function(app){
    
    //sign up
    app.post('/api/signup', (req, res) => {
        // read req.body

        // create user in db

        // reroute to dashboard
    });

    // home with user
    app.get('/dashboard', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    //user books
    app.get('/api/user-book', (req, res) => {
        // render index with user data
        res.render('dashboard', { layout: 'landing' })
    });

    // // blog
    // app.get('/user-blog', (req, res) => {
    //     res.render('index', { layout: 'landing' })
    // });

    // meetups
    app.get('/meetup', (req, res) => {
        res.render('index', { layout: 'landing' })
    });
    



}
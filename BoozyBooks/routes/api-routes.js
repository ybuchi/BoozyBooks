// require db
var Signups = require("../models/BoozyBooks")


module.exports = function(app){
    
    //sign up
    app.post("/api/signup",(req, res) => {

            // Take the request...
    var form = req.body;
    console.log("This is the form: " + form);

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // var routeName = form.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Signups.create({
      firstName: form.firstName,
      lastName: form.lastName,
      email: character.email,
      readingLevel: character.readingLevel,
      bookTitle: character.bookTitle,
      bookAuthor: character.bookAuthor,
      genre: character.genre,
      readingStatus: character.readingStatus,
    });

    res.status(204).end();
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
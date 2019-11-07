var meetUP = require('../../models/Meetups');


module.exports = function (app) {

// Get blog 
app.get('/meetups', (req, res) => 
meetUP.findAll()
    .then(meetups => { 
        console.log(meetups)
        res.render('meetups',  { layout: 'landing', 
        meetups

        });
    })
    .catch(err => console.log(err)));


// Add a new meetup
app.get('/metups/', (req, res) => 
res.render('meetups'));

 // Add a new blog
 app.post("/meetups/", (req, res) => {
    // Pulling here
let { 
    firstName, 
    lastName, 
    email, 
    readingLevel, 
    bookTitle, 
    bookAuthor, 
    genre, 
    readingStatus }  = req.body;

    let errors = [];

    if (!firstName) {
        errors.push({ text: "Please add your first name" });
      }
      if (!lastName) {
        errors.push({ text: "Please add your first name" });
      }
      if (!email) {
        errors.push({ text: "Please fill in email" });
      }
      if (!readingLevel) {
        errors.push({ text: "Please fill in reading level" });
      }
      if (!bookTitle) {
        errors.push({ text: "Please add the book's title" });
      }
      if (!bookAuthor) {
        errors.push({ text: "Please add the book's author" });
      }
      if (!genre) {
        errors.push({ text: "Please add the book's genre" });
      }
      if (!readingStatus) {
        errors.push({ text: "Please fill in the reading status" });
      }

      if (errors.length > 0) {
          res.render('meetups', {
              errors,
              firstName, 
              lastName, 
              email, 
              readingLevel, 
              bookTitle, 
              bookAuthor, 
              genre, 
              readingStatus

          });
      }else {
        // Insert INTO TABLE
            meetUP.create({
                firstName, 
                lastName, 
                email, 
                readingLevel,
                bookTitle, 
                bookAuthor, 
                genre, 
                readingStatus
            })
            .then(meetups => res.redirect('/meetups'))
            .catch(err => console.log(err));
      }
});

}
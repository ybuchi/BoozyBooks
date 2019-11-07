var Signups = require("../../models/signups");


module.exports = function (app){

//sign up get
app.get('/signups', (req, res) =>
Signups.findAll()
.then(signups =>
 {
     console.log(signups);
        res.render('signups', { layout: 'landing',
        signups, 
    })
})
.catch(err => console.log(err)));

// Display add sign ups form
app.get("/signups/", (req, res) => res.render("index"));


//sign up post
app.post("/signups/", (req, res) => {

    // Take the request...
    // var form = req.body;
    // console.log(req.body);
    let {
        firstName,
        lastName,
        email,
        readingLevel,
        bookTitle,
        bookAuthor,
        genre,
        readingStatus,
    } = req.body;

    let errors = [];



    if (!firstName) {
        errors.push({ text: "Please add your first name" });
      }
      if (!lastName) {
        errors.push({ text: "Please add your last name" });
      }
      if (!email) {
        errors.push({ text: "Please enter your email" });
      }
      if (!readingLevel) {
        errors.push({ text: "Please add the reading level of the book" });
      }
      if (!bookTitle) {
        errors.push({ text: "Please add the title of the book" });
      }
      if (!bookAuthor) {
        errors.push({ text: "Please add the author of the book" });
      }
      if (!genre) {
        errors.push({ text: "Please add the genre of the book" });
      }
     
      if (!readingStatus) {
        errors.push({ text: "Please add your reading status" });
      }
  
      // check for errors
      if (errors.length > 0) {
          res.render('signups', {
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
      } else {
 // Then add the character to the database using sequelize
    Signups.create({
        firstName,
        lastName,
        email,
        readingLevel,
        bookTitle,
        bookAuthor,
        genre,
        readingStatus,
      })
      .then(res.redirect("/"))
    .catch(err => console.log(err));
      }
    });
};

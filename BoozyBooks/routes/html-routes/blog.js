var Blog = require("../../models/Blog");

module.exports = function(app) {
  // Get blog
  app.get("/blogs", (req, res) =>
    Blog.findAll()
      .then(blogs => {
        console.log(blogs);
        res.render("blogs", { layout: "landing", blogs });
      })
      .catch(err => console.log(err))
  );

  // Display add blog form
  app.get("/blogs/", (req, res) => res.render("blogs"));

  // Add a new blog
  app.post("/blogs/", (req, res) => {
    // Pulling here
    let {
      bookTitle,
      bookAuthor,
      genre,
      firstName,
      lastName,
      readingLevel,
      blogging
    } = req.body;

    let errors = [];

    if (!firstName) {
      errors.push({ text: "Please add your first name" });
    }
    if (!lastName) {
      errors.push({ text: "Please add your last name" });
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
    if (!readingLevel) {
      errors.push({ text: "Please add the reading level of the book" });
    }
    if (!blogging) {
      errors.push({ text: "Please enter a blog" });
    }

    // check for errors
    if (errors.length > 0) {
        res.render('blogs', {
            errors,
            bookTitle,
            bookAuthor,
            genre,
            firstName,
            lastName,
            readingLevel,
            blogging
        });
    } else {
      // Insert INTO TABLE
      Blog.create({
        bookTitle,
        bookAuthor,
        genre,
        firstName,
        lastName,
        readingLevel,
        blogging
      })
        .then(res.redirect("#blogExamples"))
        .catch(err => console.log(err));
    }
  });
};

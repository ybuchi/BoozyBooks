var express = require('express');
var router = express.Router();
var db = require('../config/database');
var Book = require('../models/BoozyBooks');

// Get Sign Up
router.get('/', (req, res) => 
Book.findAll()
.then(signups => { 
res.render('signups', {
signups
});
})
.catch(err => console.log(err)));

// Get Chapterbooks List
router.get('/', (req, res) => 
Book.findAll()
.then(chapterbooks => { 
res.render('chapterbooks', {
    chapterbooks
});
})
.catch(err => console.log(err)));

// Get sitewords List
router.get('/', (req, res) => 
Book.findAll()
.then(sitewords => { 
res.render('sitewords', {
sitewords

});
})
.catch(err => console.log(err)));




// Add a Blog
router.get('/add', (req, res) => {
var data = {
    title: "The Great Gatsby",
    firstName: "Sinuhe",
    lastName: "Montero",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    blog: 'I Love this book! I read this when I was in college. I know super late. I then saw the movie some years later but I certainly prefered reading the book.'
}

let { title, firstName, lastName, author, genre, blog } = data;

// Insert INTO TABLE
Book.create({
    title,
    firstName,
    lastName, 
    author, 
    genre, 
    blog
})
.then(chapterbooks => res.redirect('/chapterbooks'))
.catch(err => console.log(err));
});


// router.get('/', (req, res) => 
// Book.findAll()
// .then(sitewordsDB => { 
//     console.log(sitewordsDB);
// res.sendStatus(200);
// })
// .catch(err => console.log(err)));

module.exports = router;
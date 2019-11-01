var db = require("../config");
var Books = require("../models/BoozyBooks");
var express = require("express");
var router = express.Router();;

router.get('/', (req, res) => Books.findAll()
.then(index => {
  res.render('index', {index}
  );
})
.catch(err => console.log(err)));
 

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
module.exports = router;

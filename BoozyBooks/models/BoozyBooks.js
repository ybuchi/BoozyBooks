var Sequelize = require('sequelize');
var db = require('../config/database');

var Chapterbooks = db.define('chapterbooks', {
  title: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      blog: {
        type: Sequelize.STRING
      }
});

// var Sitewords = db.define('sitewords', {
//   title: {
//     type: Sequelize.STRING
//   },
//   firstName: {
//     type: Sequelize.STRING
//   },
//   LastName: {
//     type: Sequelize.STRING
//   },
//   author: {
//     type: Sequelize.STRING
//   },
//   genre: {
//     type: Sequelize.STRING
//   }
// });

module.exports = (Chapterbooks);
// module.exports = (Sitewords);
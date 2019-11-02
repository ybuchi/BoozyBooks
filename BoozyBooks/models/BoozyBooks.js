var Sequelize = require("sequelize");
var db = require("../config/database");

var Signups = db.define("signups", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  bookTitle: {
    type: Sequelize.STRING
  },
  bookAuthor: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  readingStatus: {
    type: Sequelize.STRING
  }
});

var Chapterbooks = db.define("chapterbooks", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  bookTitle: {
    type: Sequelize.STRING
  },
  bookAuthor: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  readingStatus: {
    type: Sequelize.STRING
  }
});

var Sitewords = db.define("sitewords", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  bookTitle: {
    type: Sequelize.STRING
  },
  bookAuthor: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  readingStatus: {
    type: Sequelize.STRING
  }
});

module.exports = Chapterbooks;
module.exports = Sitewords;
module.exports = Signups;

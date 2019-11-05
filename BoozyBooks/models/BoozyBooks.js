var Sequelize = require("sequelize");
var db = require("../config/database");

// //////////////////////////////////
// MEET UPS
// //////////////////////////////////

var meetups = db.define("meetups", {
  
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

// //////////////////////////////////
// Blogs
// //////////////////////////////////

var blogs = db.define("blogs", {
  bookTitle: {
    type: Sequelize.STRING
  },
  bookAuthor: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  blogging: {
    type: Sequelize.STRING
  }
  
});

// //////////////////////////////////
// Sign up
// //////////////////////////////////


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

// //////////////////////////////////
// Chapterbooks
// //////////////////////////////////


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

// //////////////////////////////////
// sitewords
// //////////////////////////////////


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
module.exports = blogs;
module.exports = meetups;





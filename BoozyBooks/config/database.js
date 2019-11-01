var Sequelize = require('sequelize');

module.exports = new Sequelize('booziechapterbooksDB_db', "root", "Winter19!", {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
},


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
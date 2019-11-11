var Sequelize = require('sequelize');

module.exports = new Sequelize("t9bbyey5wafqlt7z", "f6khqgt42ty33vr6", "bwtscvmaewqfhcsa", {
  host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
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
const Sequelize = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
  {
   dialect:"mysql", 
   host:"localhost",
   port:"3306"
  });

module.exports = sequelize;
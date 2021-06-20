/* const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe } = require('../../models');


router.get('/save', async (req, res) => {
  let meals = localStorage.getItem("meal-plan");
  meals = JSON.parse(meals);
  console.log("Almost there")

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await Dish.bulkCreate(meals, {
    individualHooks: true,
    returning: true,
  });

     
  });


module.exports = router; */
const router = require('express').Router();
const { User , Recipe } = require('../models');
const sequelize = require('../config/connection');

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('myFirstKey', 'localStorage');
console.log(localStorage.getItem('myFirstKey'));

/* let meals = localStorage.getItem("meal-plan");
  meals = JSON.parse(meals);
  console.log("Almost there") */
  /* let myStorage = window.localStorage;
  console.log(myStorage);
 */
  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}


// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('homepage')
});

router.get('/login', async (req, res) => {
  res.render('login')
});

router.get('/signup', async (req, res) => {
  res.render('signup')
});

router.get('/create', async (req, res) => {
  res.render('createPlan')
});

router.get('/meals', async (req, res) => {
  res.render('meals')
});

router.get('/save', async (req, res) => {
  

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  /* await Dish.bulkCreate(meals, {
    individualHooks: true,
    returning: true,
  }); */

  console.log("Saved meals!")
});


  
  


module.exports = router;
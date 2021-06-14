const router = require('express').Router();
const { User } = require('../models');

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

router.get('/plan', async (req, res) => {
  res.render('mealplan')
});


  
  


module.exports = router;
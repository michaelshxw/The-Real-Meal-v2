const router = require('express').Router();
//const { Our Model } = require('../models');

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
  
  


module.exports = router;
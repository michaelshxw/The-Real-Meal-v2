const router = require('express').Router();
const { User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('homepage')
});

router.get('/login', async (req, res) => {
  res.render('success')
});

router.get('/signup', async (req, res) => {
  res.render('success')
});

router.get('/setupprofile1', async (req, res) => {
  res.render('setupprofile1')
});

router.get('/plan', async (req, res) => {
  res.render('mealplan')
});


router.get('/setupprofile2', async (req, res) => {
  res.render('setupprofile2')
});

router.get('/setupprofile3', async (req, res) => {
  res.render('setupprofile3')
});


  
  


module.exports = router;
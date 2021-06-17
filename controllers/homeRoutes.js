const router = require('express').Router();
const { User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('landingpage')
});

router.get('/home', async (req, res) => {
  res.render('home')
});

router.get('/setup1', async (req, res) => {
  res.render('setupprofile1')
});

router.get('/setup2', async (req, res) => {
  res.render('setupprofile2') 
});

router.get('/setup3', async (req, res) => {
  res.render('setupprofile3')
});

router.get('/dailyplan', async (req, res) => {
  res.render('dailyplan')
});





  
  


module.exports = router;
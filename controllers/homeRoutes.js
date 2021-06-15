const router = require('express').Router();
const { User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  res.render('landingpage')
});

router.get('/loggedin', async (req, res) => {
  res.render('home')
});

router.get('/setupprofile1', async (req, res) => {
  res.render('setupprofile1')
});

router.get('/setupprofile2', async (req, res) => {
  res.render('setupprofile2')
});

router.get('/setupprofile3', async (req, res) => {
  res.render('setupprofile3')
});


  
  


module.exports = router;
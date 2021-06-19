const router = require('express').Router();
const { User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  } else {
    res.render('login');
  }
});

router.get('/home', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn
  }) 
});

router.get('/setup1', async (req, res) => {
  res.render('profile')
});

router.get('/setup2', async (req, res) => {
  res.render('setupprofile2')
});

router.get('/setup3', async (req, res) => {
  res.render('setupprofile3')
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
    res.render('login');
  }

});


router.get('/dailyplan', async (req, res) => {
  res.render('dailyplan')
});






module.exports = router;
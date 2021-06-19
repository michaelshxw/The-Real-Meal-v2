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
  if (req.session.loggedIn) {
    res.render('profile');
    return;
  } else {
    res.redirect('/');
  }
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
  if (req.session.loggedIn) {
    res.render('dailyplan', {
      loggedIn: req.session.loggedIn
    });
    return;
  } else {
    res.redirect('/');
  }
});






module.exports = router;
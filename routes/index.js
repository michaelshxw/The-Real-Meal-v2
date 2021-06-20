const router = require('express').Router();
const userController = require('../controllers/users');
const users = require('./users');
const home = require('./home');
const profile = require('./profile');
const recipes = require('./recipes');

router.get("/", userController.user_landing);
router.use('/users', users);
router.use('/home',home);
router.use('/profile',profile);
router.use('./recipes',recipes);


module.exports = router;

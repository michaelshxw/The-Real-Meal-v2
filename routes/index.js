const router = require('express').Router();
const userController = require('../controllers/users');
const users = require('./users');
const home = require('./home');

router.get("/", userController.user_landing);
router.use('/users', users);
router.use('/home',home);

module.exports = router;

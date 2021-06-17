//modulised router 
const router = require('express').Router();
const users = require("../controllers/users");

router.get('/',(req,res) => {}); // same as /users

router.post('/login', users.user_login);

router.post('/signup',users.user_signup);

module.exports = router;



//modulised router 
const router = require('express').Router();
const users = require("../controllers/users");

router.get('/',()=>{});

router.post('/login', users.user_login); //users/login

router.post('/signup',users.user_signup); //users/signup

router.post('/logout',users.user_logout); //users/logout

//do we need a logout request here?

module.exports = router;



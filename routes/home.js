//modulised router 
const router = require('express').Router();
const users = require("../controllers/users"); //variable isn't used here, required?

router.get('/',users.user_landing); // same as /home

module.exports = router;

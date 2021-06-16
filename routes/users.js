//modulised router 
const router = require('express').Router();
const users = require("../controllers/user");

router.get('/',(req,res) => {console.log('hi')});
router.post('/login', users.check_login);

module.exports = router;



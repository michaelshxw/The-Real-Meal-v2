//modulised router 
const router = require('express').Router();
const users = require("../controllers/users");

router.get('/',(req,res) => {res.render("../views/setup-profile-one")}); // same as /profile

router.post('/',(req,res) => {console.log("post request profile")}); // same as /profile

module.exports = router;

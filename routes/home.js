//modulised router 
const router = require('express').Router();
const users = require("../controllers/users");

router.get('/',(req,res) => {res.render("../views/home")}); // same as /home

module.exports = router;

//modulised router 
const router = require('express').Router()
const users = require("../controllers/users"); //also not used here, required?
const profile = require("../controllers/profile"); //also not used here, required?


router.get('/',profile.profile_goto); // same as /profile

router.post('/',(req,res) => {console.log("post request profile")}); // same as /profile

module.exports = router;


 
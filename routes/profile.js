//modulised router 
const router = require('express').Router()
const profile = require("../controllers/profile"); //also not used here, required?


router.get('/',profile.profile_goto); // same as /profile

router.post('/',(req,res) => {console.log("post request profile", req.body)}); // same as /profile

module.exports = router;


 
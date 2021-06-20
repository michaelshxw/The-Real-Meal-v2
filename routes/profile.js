//modulised router 
const router = require('express').Router()
const profile = require("../controllers/profile"); //also not used here, required?


router.get('/',profile.profile_goto); // same as /profile but get
router.post('/',profile.profile_save); // same as /profile but post

module.exports = router;


 
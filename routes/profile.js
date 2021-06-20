//modulised router 
const router = require('express').Router();
const profile = require("../controllers/profile");

router.get('/',async (req,res) =>
{
    console.log(req.session);

    try
    {
    if(req.session.user == undefined)
        {
        res.redirect("/");
        }
        else
        {
        res.render("../views/setup-profile-one"); // same as /profile
        }
    }
    catch(err){
        console.log(err);
    }
    
});



module.exports = router;

//modulised router 
const router = require('express').Router();


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
        res.render("../views/success");
        }
    }
    catch(err){
        console.log(err);
    }
});

    
module.exports = router;


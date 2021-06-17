//modulised router 
const router = require('express').Router();


router.get('/',(req,res) => 
{
    res.render("../views/success");
});

    
module.exports = router;


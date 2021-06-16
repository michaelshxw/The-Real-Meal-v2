//modulised router 

const router = require('express').Router();

router.get('/',(req,res) => {
    res.send("running login?")
});

router.post('/login',(req,res) => 
{
    console.log(req.body);
})

module.exports = router;



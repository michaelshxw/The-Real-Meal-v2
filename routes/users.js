//modulised router 

const router = require('express').Router();

router.get('/',(req,res) => {
    res.send("running login?")
});

module.exports = router;



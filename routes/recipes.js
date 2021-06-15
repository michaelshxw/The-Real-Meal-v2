//modulised router 

const router = require('express').Router();

router.get('/',(req,res) => {
    res.send("delivering recipes")
});

module.exports = router;



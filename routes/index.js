//modulised rotuer to API routers.

const router = require('express').Router();


router.get('/',(req,res) => {
    res.render("../views/index");
});

module.exports = router;



//modulised rotuer to API routers.

const router = require('express').Router();
const userRouter = require('./users');

router.get('/',(req,res) => {
    res.render("../views/index");
});

router.use('/users',userRouter);

module.exports = router;



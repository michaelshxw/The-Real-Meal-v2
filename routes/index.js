//modulised rotuer to API routers.

const router = require('express').Router();
const userRouter = require('./users');

router.use('/users',userRouter);

router.get('/',(req,res) => {
    res.send("Welcome to the real meal app :)");
});


module.exports = router;



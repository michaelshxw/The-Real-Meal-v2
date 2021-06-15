//modulised rotuer to API routers.

const router = require('express').Router();
const apiRoutes = require('./api'); // require the index.js in the API folder

router.use('/api', apiRoutes); //middleware 

module.exports = router;

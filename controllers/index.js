const router = require('express').Router();

const apiRoutes = require('./routes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/routes', apiRoutes);

module.exports = router;
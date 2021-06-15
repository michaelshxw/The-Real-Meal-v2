const router = require('express').Router();

const apiRoutes = require('../routes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/routes', apiRoutes);

module.exports = router;
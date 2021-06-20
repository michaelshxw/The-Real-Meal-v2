//modulised router 

const router = require('express').Router();
const recipes = require('../controllers/recipes')

router.get('/',(req,res) => {});

router.get('/weekly',recipes.recipe_weekly);

router.get('/daily',recipes.recipe_daily);

module.exports = router;



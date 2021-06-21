//modulised router 

const router = require('express').Router();
const recipes = require('../controllers/recipes')

router.get('/',(req,res) => {}); // same as /recipes

router.get('/weekly',recipes.recipe_weekly);// same as /recipes/weekly

router.get('/daily',recipes.recipe_daily);// same as /recipes/daily

router.get('/favourites',recipes.recipe_load);// same as /recipes/favourites

router.post('/save',recipes.recipe_save); // same as /recipes/save

module.exports = router;



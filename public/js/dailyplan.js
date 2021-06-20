// import required modules
// const userProfile = require("../../models/UserProfile")

// declare variables 
let generatePlan = "https://api.spoonacular.com/mealplanner/generate";
let apiKey = "?apiKey=4b2eba9b9022436d93402d88effe7013";
let dailyPlan = "&timeFrame=day"
let targetCalories = "&targetCalories="
// let userCalories = userProfile.calorieLimit;
let userCalories = "1800"; // until we have the actual object, hard coded
let dietPref = "&diet=";
// let userDietPref = userProfile.dietaryPreference;
let userDietPref = "vegetarian";
let exclude = "&exclude=";
// let userExclude = userProfile.excludeFoods;
let userExclude = "tomatoes";

// api request URL 
const dailyURL = generatePlan + apiKey + dailyPlan + targetCalories + userCalories + dietPref + userDietPref + exclude + userExclude;
console.log(dailyURL);

$('#genDailyPlan').click(function(){
    const data = { name}
})



// To get the id, summary and title of the recipe, use: https://api.spoonacular.com/recipes/{{id}}/summary

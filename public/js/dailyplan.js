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
let userExclude = "butter";

// api request URL 
const dailyURL = generatePlan + apiKey + dailyPlan + targetCalories + userCalories + dietPref + userDietPref + exclude + userExclude;
console.log(dailyURL);

// http request with the dailyURL
$.ajax({
    url: dailyURL,
    type: 'GET',
    success: function(res) {
        console.log(res);
    },
    dataType: "json",
    error: function() {
        alert("Couldn't retrieve daily meal plan. Please try again.");
    }
});

// To get the id, summary and title of the recipe, use: https://api.spoonacular.com/recipes/{{id}}/summary

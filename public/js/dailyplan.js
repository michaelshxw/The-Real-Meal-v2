let generatePlan = "https://api.spoonacular.com/mealplanner/generate";
let apiKey = "?apiKey=4b2eba9b9022436d93402d88effe7013";
let dailyPlan = "&timeFrame=day"
let weeklyPlan = "&timeFrame=week"
let targetCalories = "&targetCalories="
let userCalories = ;
let dietPref = "&diet=";
let exclude = "&exclude=";


const dailyURL = generatePlan + apiKey + dailyPlan + targetCalories + userCalories + dietPref + userDietPref + exclude + userExclude;
console.log(dailyURL);

const weeklyURL = generatePlan + apiKey + weeklyPlan + targetCalories + userCalories + dietPref + userDietPref + exclude + userExclude;
console.log(weeklyURL);




// To get the id, summary and title of the recipe, use: https://api.spoonacular.com/recipes/{{id}}/summary

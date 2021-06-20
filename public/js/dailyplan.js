// import required modules
const userProfile = require("../../models/UserProfile")

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
function dailyHttpRequest() {
    $.ajax({
        url: dailyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('card-body')
            let cardBodyChildren;
            console.log(res.meals);
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.meals[i].title;
            }




            // recipe title one
            // let recipeTitleOne = document.querySelector('.recipeTitleOne');
            // let titleOne = res.meals[0].title;
            // recipeTitleOne.append(titleOne)
            // // recipe title two
            // let recipeTitleTwo = document.querySelector('.recipeTitleTwo');
            // let titleTwo = res.meals[1].title;
            // recipeTitleTwo.append(titleTwo)
            // // recipe title three
            // let recipeTitleThree = document.querySelector('.recipeTitleThree');
            // let titleThree = res.meals[2].title;
            // recipeTitleThree.append(titleThree)
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
dailyHttpRequest();
// function dataHandler(data) {
//     console.log(JSON.parse(data));
// }
// To get the id, summary and title of the recipe, use: https://api.spoonacular.com/recipes/{{id}}/summary

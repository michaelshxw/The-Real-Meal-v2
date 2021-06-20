// import required modules
// const userProfile = require("../../models/UserProfile")

// declare variables 
let generatePlan = "https://api.spoonacular.com/mealplanner/generate";
let apiKey = "?apiKey=4b2eba9b9022436d93402d88effe7013";
let weeklyPlan = "&timeFrame=week"
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
const weeklyURL = generatePlan + apiKey + weeklyPlan + targetCalories + userCalories + dietPref + userDietPref + exclude + userExclude;
console.log(weeklyURL);


// http request with the dailyURL
function dailyHttpRequest() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('card-body')
            let cardBodyChildren;
            // append recipe titles
            console.log(res.week.monday);
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                carsdBodyChildren[0].textContent = res.week.monday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtns = document.getElementsByClassName('planBtns')
            let planBtnsChildren;
            for (let i = 0; i < planBtns.length; i++) {
                planBtnsChildren = planBtns[i].children;
                planBtnsChildren[1].href = res.week.monday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOne() {

                //first image
                let imageFormat1 = "." + res.week.monday.meals[0].imageType
                let imageOneID = res.week.monday.meals[0].id + "-";
                let imageURL1 = imageLink + imageOneID + imageSize + imageFormat1;
                let img = document.createElement("img")
                img.src = imageURL1
                let src = document.querySelector('.recipeImgBreakfast')
                src.appendChild(img)
            }
            imageOne();
            //second image
            function imageTwo() {
                let imageFormat2 = "." + res.week.monday.meals[1].imageType
                let imageTwoID = res.week.monday.meals[1].id + "-";
                let imageURL2 = imageLink + imageTwoID + imageSize + imageFormat2;
                let img = document.createElement("img")
                img.src = imageURL2
                let src = document.querySelector('.recipeImgLunch')
                src.appendChild(img)
            }
            imageTwo();
            //third image
            function imageThree() {
                let imageFormat3 = "." + res.week.monday.meals[2].imageType
                let imageThreeID = res.week.monday.meals[2].id + "-";
                let imageURL3 = imageLink + imageThreeID + imageSize + imageFormat3;
                let img = document.createElement("img")
                img.src = imageURL3
                let src = document.querySelector('.recipeImgDinner')
                src.appendChild(img)
            }
            imageThree();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
dailyHttpRequest();
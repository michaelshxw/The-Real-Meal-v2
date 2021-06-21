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


let currentDaily = [];
let favourite = {
    title: "",
    url: "",
    img: "",
    recipeID:""
};


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
            // append recipe titles
            currentDaily = res.meals;
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtns = document.getElementsByClassName('planBtns')
            let planBtnsChildren;
            for (let i = 0; i < planBtns.length; i++) {
                planBtnsChildren = planBtns[i].children;
                planBtnsChildren[1].href = res.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOne() {

                //first image
                let imageFormat1 = "." + res.meals[0].imageType
                let imageOneID = res.meals[0].id + "-";
                let imageURL1 = imageLink + imageOneID + imageSize + imageFormat1;
                let img = document.createElement("img")
                img.src = imageURL1
                let src = document.querySelector('.recipeImgBreakfast')
                src.appendChild(img)
            }
            imageOne();
            //second image
            function imageTwo() {
                let imageFormat2 = "." + res.meals[1].imageType
                let imageTwoID = res.meals[1].id + "-";
                let imageURL2 = imageLink + imageTwoID + imageSize + imageFormat2;
                let img = document.createElement("img")
                img.src = imageURL2
                let src = document.querySelector('.recipeImgLunch')
                src.appendChild(img)
            }
            imageTwo();
            //third image
            function imageThree() {
                let imageFormat3 = "." + res.meals[2].imageType
                let imageThreeID = res.meals[2].id + "-";
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

document.querySelectorAll('.fa-heart').forEach(item => 
{
    item.addEventListener('click', async (event) => 
    {
      console.log(currentDaily);
      switch (event.target.id)
        {
          case 'one':
            favourite.receipeID = currentDaily[0].id;
            favourite.title = currentDaily[0].title;
            favourite.img = "https://spoonacular.com/recipeImages/" + currentDaily[0].id + ".jpeg";
            favourite.url  = currentDaily[0].sourceUrl;
          break;
          case 'two':console.log(currentDaily[1]);
          favourite.receipeID = currentDaily[1].id;
          favourite.title = currentDaily[1].title;
          favourite.img = "https://spoonacular.com/recipeImages/" + currentDaily[1].id + ".jpeg";
          favourite.url  = currentDaily[1].sourceUrl;
          break;
          case 'three':console.log(currentDaily[2]);
          favourite.recipeID = currentDaily[2].id;
          favourite.title = currentDaily[2].title;
          favourite.img = "https://spoonacular.com/recipeImages/" + currentDaily[2].id + ".jpeg";
          favourite.url  = currentDaily[2].sourceUrl;
          break;
        }
    });
});
dailyHttpRequest();
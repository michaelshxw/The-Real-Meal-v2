
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


// http requests with the weeklyURL, one function for each day
function weeklyHttpRequestMonday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            console.log(res);
            let cardBody = document.getElementsByClassName('monday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.monday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsMonday = document.getElementsByClassName('planBtnsMonday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsMonday.length; i++) {
                planBtnsChildren = planBtnsMonday[i].children;
                planBtnsChildren[1].href = res.week.monday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneMonday() {

                //first image
                let imageFormat = "." + res.week.monday.meals[0].imageType
                let imageID = res.week.monday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastMonday')
                src.appendChild(img)
            }
            imageOneMonday();
            function imageTwoMonday() {

                //first image
                let imageFormat = "." + res.week.monday.meals[1].imageType
                let imageID = res.week.monday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchMonday')
                src.appendChild(img)
            }
            imageTwoMonday();
            function imageThreeMonday() {

                //first image
                let imageFormat = "." + res.week.monday.meals[2].imageType
                let imageID = res.week.monday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerMonday')
                src.appendChild(img)
            }
            imageThreeMonday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestMonday();

function weeklyHttpRequestTuesday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('tuesday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.tuesday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsTuesday = document.getElementsByClassName('planBtnsTuesday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsTuesday.length; i++) {
                planBtnsChildren = planBtnsTuesday[i].children;
                planBtnsChildren[1].href = res.week.tuesday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneTuesday() {

                //first image
                let imageFormat = "." + res.week.tuesday.meals[0].imageType
                let imageID = res.week.tuesday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastTuesday')
                src.appendChild(img)
            }
            imageOneTuesday();
            function imageTwoTuesday() {

                //first image
                let imageFormat = "." + res.week.tuesday.meals[1].imageType
                let imageID = res.week.tuesday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchTuesday')
                src.appendChild(img)
            }
            imageTwoTuesday();
            function imageThreeTuesday() {

                //first image
                let imageFormat = "." + res.week.tuesday.meals[2].imageType
                let imageID = res.week.tuesday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerTuesday')
                src.appendChild(img)
            }
            imageThreeTuesday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestTuesday();

function weeklyHttpRequestWednesday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('wednesday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.wednesday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsWednesday = document.getElementsByClassName('planBtnsWednesday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsWednesday.length; i++) {
                planBtnsChildren = planBtnsWednesday[i].children;
                planBtnsChildren[1].href = res.week.wednesday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneWednesday() {

                //first image
                let imageFormat = "." + res.week.wednesday.meals[0].imageType
                let imageID = res.week.wednesday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastWednesday')
                src.appendChild(img)
            }
            imageOneWednesday();
            function imageTwoWednesday() {

                //first image
                let imageFormat = "." + res.week.wednesday.meals[1].imageType
                let imageID = res.week.wednesday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchWednesday')
                src.appendChild(img)
            }
            imageTwoWednesday();
            function imageThreeWednesday() {

                //first image
                let imageFormat = "." + res.week.wednesday.meals[2].imageType
                let imageID = res.week.wednesday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerWednesday')
                src.appendChild(img)
            }
            imageThreeWednesday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestWednesday();

function weeklyHttpRequestThursday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('thursday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.thursday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsThursday = document.getElementsByClassName('planBtnsThursday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsThursday.length; i++) {
                planBtnsChildren = planBtnsThursday[i].children;
                planBtnsChildren[1].href = res.week.thursday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneThursday() {

                //first image
                let imageFormat = "." + res.week.thursday.meals[0].imageType
                let imageID = res.week.thursday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastThursday')
                src.appendChild(img)
            }
            imageOneThursday();
            function imageTwoThursday() {

                //first image
                let imageFormat = "." + res.week.thursday.meals[1].imageType
                let imageID = res.week.thursday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchThursday')
                src.appendChild(img)
            }
            imageTwoThursday();
            function imageThreeThursday() {

                //first image
                let imageFormat = "." + res.week.thursday.meals[2].imageType
                let imageID = res.week.thursday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerThursday')
                src.appendChild(img)
            }
            imageThreeThursday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestThursday();

function weeklyHttpRequestFriday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('friday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.friday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsFriday = document.getElementsByClassName('planBtnsFriday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsFriday.length; i++) {
                planBtnsChildren = planBtnsFriday[i].children;
                planBtnsChildren[1].href = res.week.friday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneFriday() {

                //first image
                let imageFormat = "." + res.week.friday.meals[0].imageType
                let imageID = res.week.friday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastFriday')
                src.appendChild(img)
            }
            imageOneFriday();
            function imageTwoFriday() {

                //first image
                let imageFormat = "." + res.week.friday.meals[1].imageType
                let imageID = res.week.friday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchFriday')
                src.appendChild(img)
            }
            imageTwoFriday();
            function imageThreeFriday() {

                //first image
                let imageFormat = "." + res.week.friday.meals[2].imageType
                let imageID = res.week.friday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerFriday')
                src.appendChild(img)
            }
            imageThreeFriday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestFriday();

function weeklyHttpRequestSaturday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('saturday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.saturday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsSaturday = document.getElementsByClassName('planBtnsSaturday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsSaturday.length; i++) {
                planBtnsChildren = planBtnsSaturday[i].children;
                planBtnsChildren[1].href = res.week.saturday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneSaturday() {

                //first image
                let imageFormat = "." + res.week.saturday.meals[0].imageType
                let imageID = res.week.saturday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastSaturday')
                src.appendChild(img)
            }
            imageOneSaturday();
            function imageTwoSaturday() {

                //first image
                let imageFormat = "." + res.week.saturday.meals[1].imageType
                let imageID = res.week.saturday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchSaturday')
                src.appendChild(img)
            }
            imageTwoSaturday();
            function imageThreeSaturday() {

                //first image
                let imageFormat = "." + res.week.saturday.meals[2].imageType
                let imageID = res.week.saturday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerSaturday')
                src.appendChild(img)
            }
            imageThreeSaturday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestSaturday();

function weeklyHttpRequestSunday() {
    $.ajax({
        url: weeklyURL,
        type: 'GET',
        success: function (res) {
            let cardBody = document.getElementsByClassName('sunday')
            let cardBodyChildren;
            // append recipe titles
            for (let i = 0; i < cardBody.length; i++) {
                cardBodyChildren = cardBody[i].children;
                cardBodyChildren[0].textContent = res.week.sunday.meals[i].title;
            };
            // append recipe url to show recipe button
            let planBtnsSunday = document.getElementsByClassName('planBtnsSunday')
            let planBtnsChildren;
            for (let i = 0; i < planBtnsSunday.length; i++) {
                planBtnsChildren = planBtnsSunday[i].children;
                planBtnsChildren[1].href = res.week.sunday.meals[i].sourceUrl;
            };
            //image appending
            //declare variables
            const imageLink = "https://spoonacular.com/recipeImages/";
            const imageSize = "312x231"
            function imageOneSunday() {

                //first image
                let imageFormat = "." + res.week.sunday.meals[0].imageType
                let imageID = res.week.sunday.meals[0].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgBreakfastSunday')
                src.appendChild(img)
            }
            imageOneSunday();
            function imageTwoSunday() {

                //first image
                let imageFormat = "." + res.week.sunday.meals[1].imageType
                let imageID = res.week.sunday.meals[1].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgLunchSunday')
                src.appendChild(img)
            }
            imageTwoSunday();
            function imageThreeSunday() {

                //first image
                let imageFormat = "." + res.week.sunday.meals[2].imageType
                let imageID = res.week.sunday.meals[2].id + "-";
                let imageURL = imageLink + imageID + imageSize + imageFormat;
                let img = document.createElement("img")
                img.src = imageURL
                let src = document.querySelector('.recipeImgDinnerSunday')
                src.appendChild(img)
            }
            imageThreeSunday();
        },
        dataType: "json",
        error: function () {
            alert("Couldn't retrieve daily meal plan. Please try again.");
        },
    });
}
weeklyHttpRequestSunday();
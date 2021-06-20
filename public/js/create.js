let appID = "&apiKey=07f9733071ab43b69f65f79c48bee577"; 
let spoonURL = "https://api.spoonacular.com/mealplanner/generate?timeFrame=day?";
let dietPref = "&diet=";
let exclude = "&exclude=";
let targetCalories = "&targetCalories=";
let calories = "1700";
let selectionText = "vegan"
let usersProfile = localStorage.getItem("profile");
usersProfile = JSON.parse(usersProfile);



let endP = spoonURL + appID + targetCalories + calories + dietPref + selectionText;
console.log(endP);

const createFunction = async (event) => {
  event.preventDefault();

  const dataRequest = document.querySelector('#create-btn');

  if (dataRequest) {
    contactSpoon(endP);
    function contactSpoon(endPoint) {
    fetch(endPoint)
      .then(function response(data) {

        if (!data.ok) 
        {
          throw new Error;  
        }

        return data.json();
      })
      .then(function process(pData) {

        localStorage.setItem("meal-plan", JSON.stringify(pData));
        let meals = localStorage.getItem("meal-plan");
        meals = JSON.parse(meals);
        console.log(meals); //3 Meals
        document.location.replace('/meals');
        
      })
      .catch(function error(error) {
        alert("Unknown error: please try again");
      });
    }
  };
};
document.querySelector('#create-btn').addEventListener('click', createFunction);
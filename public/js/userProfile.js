const profileFormHandler = async (event) => {
  event.preventDefault();


  let userProfile = {
    dob: document.querySelector('#profile-dob').value.trim(),
    weight:document.querySelector('#profile-weight').value.trim(),
    height: document.querySelector('#profile-height').value.trim(),
    weightGoal:document.querySelector('#profile-weight-goal').value.trim(),
    activityLevel:document.querySelector('#profile-activity-level').value.trim(),
    dietaryPreference:document.querySelector('#profile-dietPref').value.trim(),
    allergies:document.querySelector('#profile-allergies').value.trim(),
    excludeFoods:document.querySelector('#profile-exclude').value.trim(),
    calorieLimit:document.querySelector('#profile-calLimit').value.trim(),
    measurementSystem:document.querySelector('#measurementSystem').value.trim(),
    carbs:document.querySelector('#profile-macrosCarbs').value.trim(),
    fat:document.querySelector('#profile-macrosFat').value.trim(),
    protein:document.querySelector('#profile-macrosProtein').value.trim(),
  }

  console.log(userProfile);
}
      
      /*const response = await fetch('/profile', {
      method: 'POST',
      body: JSON.stringify(userProfile),
      headers: { 'Content-Type': 'application/json' },
      });
      if(response.ok)
      {

      }
      else
      {
        alert("Error updating profile..", response.error);
      }
}*/

document
  .querySelector('#profileSetup')
  .addEventListener('submit', profileFormHandler)
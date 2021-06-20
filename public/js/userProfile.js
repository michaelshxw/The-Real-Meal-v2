const profileFormHandler = async (event) => {
    event.preventDefault();
  
    const dob = document.querySelector('#profile-dob').value.trim();
    const weight = document.querySelector('#profile-weight').value.trim();
    const height = document.querySelector('#profile-height').value.trim();
    const weightGoal = document.querySelector('#profile-weight-goal').value.trim();
    const activityLevel = document.querySelector('#profile-activity-level').value.trim();
    const dietaryPreference = document.querySelector('#profile-dietPref').value.trim();
    const allergies = document.querySelector('#profile-allergies').value.trim();
    const excludeFoods = document.querySelector('#profile-exclude').value.trim();
    const calorieLimit = document.querySelector('#profile-calLimit').value.trim();
    const measurementSystem = document.querySelector('#measurementSystem').value.trim();
    const carbs = document.querySelector('#password-signup').value.trim();
    const fat = document.querySelector('#password-signup').value.trim();
    const protein = document.querySelector('#password-signup').value.trim();
    


    if (dob && weight && height && weightGoal && activityLevel && dietaryPreference && allergies && excludeFoods && calorieLimit && measurementSystem && carbs && fat && protein) {
      const response = await fetch('/users/UserProfile', {
        method: 'POST',
        body: JSON.stringify({ dob, weight, height, weightGoal, activityLevel, dietaryPreference, allergies, excludeFoods, calorieLimit, measurementSystem, carbs, fat, protein }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // if response ok, do something here
      } else {
        alert('Failed to save data');
      }
    }
  };
  
  document
    .querySelector('#profileSetup')
    .addEventListener('submit', profileFormHandler);
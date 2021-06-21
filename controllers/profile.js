const { Profile } = require("../models/index");


exports.profile_goto = async function (req, res) {

    if(req.session.loggedIn == true)
    {
        res.render("../views/profile",{loggedIn: true});
    }
    else
    {
        res.render("../views/login");
    }
}
    
exports.profile_save = async function (req, res) {
    console.log(req.body);
    if(req.session.loggedIn == true)
    {
            await Profile.create({
            dob: req.body.DOB,
            weight:req.body.weight,
            height:req.body.height,
            weightGoal:req.body.weightGoal,
            activityLevel:req.body.actLevel,
            dietaryPreference:req.body.dietPref || "Paleo",
            allergies:req.body.allergies,
            excludeFoods:req.body.exclusions,
            calorieLimit:req.body.calories,
            measurementSystem:"Metric",
            carbs:req.body.carbs,
            fat:req.body.fat,
            protein:req.body.protein,
        });

        res.redirect("/home");
    }
    else
    {
        res.render("../views/login");
    }

}



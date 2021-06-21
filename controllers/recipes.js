const { Recipes } = require("../models/index");

exports.recipe_daily = async function (req, res) {

    if(req.session.loggedIn == true)
    {
        res.render("../views/dailyplan",{loggedIn: true});
    }
    else
    {
        res.render("../views/login");
    }
}

exports.recipe_weekly = async function (req, res) {

    if(req.session.loggedIn == true)
    {
        res.render("../views/weeklyplan",{loggedIn: true});
    }
    else
    {
        res.render("../views/login");
    }
}

exports.recipe_save = async function (req, res) {

    if(req.session.loggedIn == true)
    {
        console.log(req.body);
            await Recipes.create({
            title: req.body.favourite.title,
            recipeImage:req.body.favourite.image,
            recipeURL:req.body.favourite.url,
            recipe_id: req.body.favourite.recipeID
        });
    }
}
exports.recipe_favorites = async function (req, res) {

    if(req.session.loggedIn == true)
    {
        res.render("../views/favourites",{loggedIn: true});
    }
    else
    {
        res.render("../views/login");
    }
}


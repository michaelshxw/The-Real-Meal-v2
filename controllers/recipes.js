//const { Profile } = require("../models/index");

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


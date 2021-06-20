const sequelize = require("../config/connection");
//const { Profile } = require("../models/index");

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

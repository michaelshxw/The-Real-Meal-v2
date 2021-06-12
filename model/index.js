const favouriteRecipies = require("./favouriteRecipies");
const User = require("./User");
const userProfile = require("./userProfile");

// define relationships between the tables 

module.exports = 
{
    favouriteRecipies, 
    userProfile, 
    User
};
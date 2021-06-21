const Recipe = require("./Recipe");
const Profile = require("./Profile");
const User = require("./User");

// define relationships between tables 
/*
Profile.belongsTo(User, {
    foreignKey: "user_id",
})

Recipe.belongsToMany(User, {
    foreignKey: ""
});
*/

module.exports =
{
    Recipe,
    Profile,
    User,
};

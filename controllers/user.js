const sequelize = require("../config/connection")
const User = require("../model/User");

const seedDatabase = async() => {
    await sequelize.sync();
}

exports.user_login = async function (req,res)
{
    console.log("checking login", req.body);
    res.send("ok");
}

exports.user_signup = async function (req,res)
{
    const arr = await User.findOrCreate(
    {
        where: 
        {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password
        }

    });

    const instance = arr[0] // the first element is the instance
    const wasCreated = arr[1] // the second element tells us if the instance was newly created
    if(wasCreated)
    {
        res.send("Signup Success");
    }
}

seedDatabase();
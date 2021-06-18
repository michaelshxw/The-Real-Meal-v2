const sequelize = require("../config/connection")
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");


const seedDatabase = async() => {
    await sequelize.sync();
}

exports.user_login = async function (req,res)
{
  const password = req.body.password;

  //find user by username
  const findUser = await User.findOne(
  {
      where: 
      {
      email: req.body.email,
      }
  });

  //check if user exists
  if(findUser === null)
  {
    console.log("invalid credentials");
  }
  else
  {
    //use class method checkPassword() against the user object 
    //has users input password 

   const checkPass = findUser.checkPassword(req.body.password);
   
   if(checkPass)
   {
     res.send();
   }
   else
   {
     res.status(404);
   }

  }


    
}

exports.user_signup = async function (req,res)
{
    const arr = await User.findOrCreate(
    {
        where: 
        {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password,
        }
    })

    const wasCreated = arr[1] // the second element tells us if the instance was newly created

    if(wasCreated)
    {
        res.send("Signup Success");
    }
}



seedDatabase();
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
  await User.findOne(
  {
      where: 
      {
      email: req.body.email,
      }

  }).then((user) => {

    if(user === null)
    {
      res.status(500);
    }
    else
    {
      //use class method checkPassword() against the user object 
      //has users input password 
      const checkPass = user.checkPassword(req.body.password);
      if(checkPass)
      {
        setSession(req.session, req.body.email);
        res.send();
      }
      else
      {
        res.status(500);
        res.send();
      }
    }
  }).catch((err) => console.log(err.message));
}

exports.user_signup = async function (req,res)
{
    await User.findOrCreate(
    {
        where: 
        {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password,
        }
    }).then((arr) =>
    {
      const wasCreated = arr[1] // the second element tells us if the instance was newly created
      if(wasCreated)
      {
          res.send("Signup Success");
      }
      else
      {
        res.status(500);
        res.send();
      }
    }).catch((err) => {
      console.log('There was an error', err.message)
      res.status(500)
      res.send();
    });
  }

  function setSession(reqSession, email,)
  {
    reqSession.user = {};
    reqSession.user.email = email;
    reqSession.user.loggedIn = true;
    return;
  }

seedDatabase();
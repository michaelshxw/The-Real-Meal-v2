const sequelize = require("../config/connection");
const { User } = require("../models/index");


exports.user_login = async function (req, res) {
  //find user by username
  await User.findOne(
    {
      where:
      {
        email: req.body.email,
      }

    }).then((user) => {

      if (user === null) {
        res.status(500);
      }
      else {
        //use class method checkPassword() against the user object 
        //has users input password 
        const checkPass = user.checkPassword(req.body.password);
        if (checkPass) {
          setSession(req.session, req.body.email);
          res.send();
        }
        else {
          res.status(500);
          res.send();
        }
      }
    }).catch((err) => console.log(err.message));
}

exports.user_signup = async function (req, res) {
  await User.findOrCreate(
    {
      where:
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }
    }).then((arr) => {
      const wasCreated = arr[1] // the second element tells us if the instance was newly created
      if (wasCreated) {
        setSession(req.session, req.body.email);
        res.send("Signup Success").end();
      }
      else {
        res.status(500);
        res.end();
      }
    }).catch((err) => {
      console.log('There was an error', err.message)
      res.status(500);
      res.end();
    });
}

exports.user_landing = function checkUser(req,res)
{

  if (req.session.loggedIn)
  {
    res.render("../views/home",{loggedIn: true});
  }
  else
  {
    res.render("../views/login");
  }
  
}

exports.user_logout = function logOut(req,res)
{
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.send("ok").end();
    });
  } else {
    res.status(404).end();
  }

}

function setSession(reqSession, email,) {
  reqSession.loggedIn = true;
  return;
}

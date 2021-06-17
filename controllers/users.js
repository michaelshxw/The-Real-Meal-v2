const sequelize = require("../config/connection")
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");


const seedDatabase = async() => {
    await sequelize.sync();
}

exports.user_login = async function (req,res)
{
    const password = req.body.password;

    bcrypt.genSalt(10, async function (err, salt) {
      if (err) 
      {
        throw err
      } 
      else 
      {
        bcrypt.hash(password, salt, async function(err, hash) {
          if (err) 
          {
            throw err
          } 
          else 
            {
                const findUser = await User.findOne(
                {
                    where: 
                    {
                    email: req.body.email,
                    }
                });
                
                if(findUser === null)
                {
                    console.log("invalid credentials");
                }
                else
                {
                    bcrypt.compare(password, hash, function(err, isMatch) {
                        if (err) {
                          throw err
                        } else if (!isMatch) {
                          console.log("fail");
                        } else {
                            res.send("ok");
                        }
                      })
                }
            }
        });
        }
    });
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
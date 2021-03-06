const { Recipe } = require("../models/index");

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
    console.log(req);
    if(req.session.loggedIn == true)
    {
            await Recipe.create(
            {
            title:req.body.title,
            image:req.body.img,
            url:req.body.url,
            recipe_id:req.body.recipeID,
            });
    }
}

exports.recipe_load = async function (req, res) {

        if(req.session.loggedIn == true)
        {
            res.render("../views/favourites");
        }
               //find user by username
 /* await Recipe.findOne(
    {
      where:
      {
        
      }

    }).then((recipe) =>
     {
      if (recipe === null) {
        res.status(500);
      }
      else
      {
          return //user faves
      }
    });
}*/
}



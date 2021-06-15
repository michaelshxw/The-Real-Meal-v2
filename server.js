//import modules    
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
//const routes = require('./controllers');
const exphbs = require('express-handlebars');//aded
const expressHandlebars = exphbs.create({}); //added
const dotenv = require("dotenv")


// vue NPM package for generating UUIDs
const { v4: uuidv4 } = require('uuid');

// assign express object to expressServer;
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 3306;

//Register handlebars to express
app.engine('handlebars', expressHandlebars.engine);
app.set('view engine', 'handlebars');

//app.use(routes);
app.use(express.json());//added
app.use(express.urlencoded({ extended: false }));//added
app.use(express.static(path.join(__dirname, 'public')));//added
//express.static(path.join(__dirname, 'db'));
app.use(require('./controllers/'));//added

//Sync sequilizer 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Real Meal is listening to Port: ' + PORT));
});


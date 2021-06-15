//import modules    
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
//const routes = require('./controllers');
const exphbs = require('express-handlebars');//aded
const expressHandlebars = exphbs.create({}); //added
require('dotenv').config();
const routes = require('./controllers');


// vue NPM package for generating UUIDs
const { v4: uuidv4 } = require('uuid');

// assign express object to expressServer;
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 3001;

//Register handlebars to express
app.engine('handlebars', expressHandlebars.engine);
app.set('view engine', 'handlebars');

//app.use(routes);
app.use(express.json());//added
app.use(express.urlencoded({ extended: true }));//added
app.use(express.static(path.join(__dirname, 'public')));//added
//express.static(path.join(__dirname, 'db'));
app.use(require('./controllers/'));//added

app.use(routes)

//Sync sequilizer 
// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Real Meal is listening to Port: ' + PORT));
// });


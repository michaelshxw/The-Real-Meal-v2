//import modules    
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');


// vue NPM package for generating UUIDs
const { v4: uuidv4 } = require('uuid');

// assign express object to expressServer;
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 8000;

//app.use(routes);

express.static(path.join(__dirname, '/public'));
express.static(path.join(__dirname, '/db'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log('Now listening on port number:', PORT));





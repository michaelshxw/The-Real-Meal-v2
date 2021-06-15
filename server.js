//import modules    
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const homeRouter = require('./routes/index');
const userRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');

// assign express object to expressServer;
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 8000;


express.static(path.join(__dirname, '/public')); // retrieve css and js files automatically
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',homeRouter);//middleware to run homeRouter on request to homepage.
app.use('/users',userRouter);//middleware to run userRouter on request to users.
app.use('/recipes',recipesRouter);//middleware to run userRouter on request to users.


app.listen(PORT, () => console.log('Now listening on port number:', PORT));








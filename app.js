const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors  = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config  = require('./config/database');

//connecting to database mlab cloud
mongoose.connect(config.database);



const app = express();

const users = require('./routes/users');

//CORS allows us to make request to this api from different domain
app.use(cors());

//parse the json in incoming request
app.use(bodyParser.json());


//Set static client folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/users',users);

//Default Route
app.get('/',(req,res)=>{
    res.send("You got this message from Express server");
});

const port = 3000;

app.listen(port,()=>{
    console.log("Server is up and running");
})
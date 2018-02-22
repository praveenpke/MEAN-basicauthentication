const express = require('express');
const router = express.Router();

const User = require('../models-mongoose/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');


//Register
router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });

    User.addUser(newUser,(error,user)=>{
        if(error){
            res.json({success:false,message:'Failed to register user'});
        }else{
            res.json({success:true, message:'Thanks for Signing Up!'})
        }
    })
});

//authenticate
router.post('/authenticate',(req,res,next)=>{
    res.send('AUTHENTICATE');
});

//profile
router.get('/profile',(req,res,next)=>{
    res.send('PROFILE');
});



module.exports = router;
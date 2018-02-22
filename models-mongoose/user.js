const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//user schema
const UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


//user model create

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUsername = function(id,callback){
    const query = {username: username}
    User.findOne(query);
}

module.exports.addUser = function(newUser, callback){
    //hashing the password
    bcrypt.genSalt(10,(error,salt)=>{
        bcrypt.hash(newUser.password,salt,(error,hash)=>{
            if(error){
                throw error;
            }
            newUser.password = hash;
            newUser.save(callback); //saving the user instance
        })
    })
}
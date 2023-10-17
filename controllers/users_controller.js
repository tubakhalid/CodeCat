// importing user model
const { request } = require('express');
const User = require('../models/user')

module.exports.profile = function(req,res){
   // here users is the name of user.ejs 
   //the html file we want to display or render when this controller comes into play
  return res.render('users',{title:"userprofile"})
}

// action for user signup
module.exports.signIn = function(req,res)
{
  res.render('user_sign_in',{
    title:"Codecat | Sign In"
  });
}

// function for sign up
module.exports.signUp = function(req,res){
  res.render('user_sign_up',{title:"Codecat | Sign Up"});
}

// actions to perform for sign -up 
module.exports.createUser=function(req,res)
{
  // check pass with confirm pass
  if(req.body.password != req.body.confirm_password)
  {
    return res.render('back');
  }

  // finding user id if it already exist or not
  User.findOne({email:request.body.email},function(err,user)
  {
    if(err)
    {
      console.log("error in finding user in signing up");
      return;
    }
  })
}
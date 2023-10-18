// importing user model 
const User = require('../models/user')

module.exports.profile = function (req, res) {
  // here users is the name of user.ejs 
  //the html file we want to display or render when this controller comes into play
  return res.render('users', { title: "userprofile" })
}

// action for user signin
module.exports.signIn = function (req, res) {
  res.render('user_sign_in', {
    title: "Codecat | Sign In"
  });
}

// function for sign up
module.exports.signUp = function (req, res) {
  res.render('user_sign_up', { title: "Codecat | Sign Up" });
}

// actions to perform for sign -up (getting the data)
module.exports.createUser = function (req, res) {
  console.log("hi im in crete useer");
  // check pass with confirm pass
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }


  //if passwords are same check if any other user has same email id
  // finding user id if it already exist or not
  User.findOne({ email: request.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }


    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in  signing up");
          return;
        }
        return res.redirect('/users/sign-in')
      })
    }
    // if user already exists
    else {
      return res.redirect('back');
    }
  });
}
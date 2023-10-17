const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller')

//mapping a route to the usercontroller
router.get('/',userController.profile);

// mapping a route for sign in and sign up
// for routes we are using dash in the url

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);

//exporting route
module.exports = router;

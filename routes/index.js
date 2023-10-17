const express = require('express');
//creation of router
const router = express.Router();
const homeController = require('../controllers/home_controller')
// making router available to other files
module.exports = router;
console.log("testing is route file loaded or not");
// any request that comes in require the "index" of ( aka main route) routes
router.get('/',homeController.home);

// if request with /users come in then redirect it to users route
router.use('/users',require('./users'));

// again if request is '/posts' then redirect it to this 
router.use('/posts',require('./posts'));
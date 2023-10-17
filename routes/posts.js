const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller');
//mapping this route to the posts controller
// this / here means after getting the request for 8000/posts/
//(whatever we mention inside this bracket we need to mention here in the file in place of "/")  
//but if we keep it "/" only - then localhost:8000/posts will redirect us to this route
router.get('/',postsController.posts);
module.exports=router;

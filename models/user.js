const mongoose = require('mongoose');
//creating a schema for the user
//also defining the fields and there properties which will be there in db -> schema({field details},{time stamp})
const userSchema = new mongoose.Schema
({
    email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
}
},{timestamps:true}
);


// telling mongoose that user refers to user schema model and creating a const for exports and imports
const User = mongoose.model('User',userSchema);
module.exports=User;

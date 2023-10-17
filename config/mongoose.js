// importing mongoose just how we imported http 
const mongoose = require('mongoose');

//connecting to the database
mongoose.connect('mongodb://127.0.0.1/codecat_development');
//accquire the connection to check if it is sucessful
const db = mongoose.connection;

//when ever there is an error
db.on('error', console.error.bind(console,'error connecting to db'));

// up and running then print the msg
db.once('open',function(){
    console.log('Successfully connected to db');
});

module.exports=db;
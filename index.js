const express = require('express');
const app = express();
const port = 8000;
// requiring cookie
const cookie = require('cookie-parser');
// to access data using middleware 
app.use(express.urlencoded());

// //using cookie - parser
// app.use(cookieParser());
// db stuff still need to understand
const db = require('./config/mongoose')
// framework to build a layout
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
// using the layout
app.use(expressLayout);

// extracting  and placing the style/scripts from individual pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts',true);
// telling ous app which folder to look for static files
app.use(express.static('./assets'));

//using express router 
app.use('/',require('./routes'));

// setting ejs as view engine 
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port , function(err)
{
if(err)
{
    console.log(`Error in starting the server ${err}`);
}
console.log(`server is running on : ${port}`);
});


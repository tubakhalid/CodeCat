module.exports.home = function(req,res){
    // the controllers are used for performing actions 
    return res.render('home',{title:"codecat"});
}
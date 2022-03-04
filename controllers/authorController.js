const {Author} = require('../models')

//view all
module.exports.viewAll = async function(req, res){
    const authors = await Author.findAll();
    res.render('authors/view_all', {authors});
}
//profile
module.exports.viewProfile = async function(req, res){
    const authors = await Author.findByPk(req.params.id);
    res.render('authors/profile', {authors});
}

//render add

//add

//render edit

//edit

//delete
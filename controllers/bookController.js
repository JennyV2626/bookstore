const {Book} = require('../models')
const genres = ['Sci-Fi', 'Fantasy Fiction', 'Childrens Literature', 'Mystery', 'Comedy'].sort();

//view all
module.exports.viewAll = async function(req, res){
    const books = await Book.findAll();
    res.render('books/view_all', {books});
}

//profile
module.exports.viewProfile = async function(req, res){
    const books = await Book.findByPk(req.params.id);
    res.render('books/profile', {books});
}

//render add form

//add

//render edit form
module.exports.renderEditForm = async function(req, res){
    const books = await Book.findByPk(req.params.id);
    res.render('books/edit', {books, genres});
}

//update
module.exports.updateBook = async function(req, res){
    const books = await Book.update({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        description: req.body.description
        }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect(`/books/profile/${req.params.id}`);
}

//delete
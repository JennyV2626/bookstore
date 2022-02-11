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
module.exports.renderAddForm = function(req, res){
    const books = {
        title: '',
        author: '',
        publisher: '',
        genre: genres[0],
        pages: '',
        description: ''
    }
    res.render('books/add', {books, genres})
}

//add
module.exports.addBook = async function(req, res){
    const books = await Book.create({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        description: req.body.description
    });
    res.redirect(`/books/profile/${books.id}`);
}

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
module.exports.deleteBook = async function(req, res){
    await Book.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/books');
}
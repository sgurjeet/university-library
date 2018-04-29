var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: String,
    isAvail: String
});

//model name,schema ,table name
var Books = mongoose.model('bookModel', bookSchema, 'books');

router.get('', (request, response) => {
    console.log(request.body);
    response.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    //error if any,table name
    Books.find({}, function (err, books) {
        if (err) {
            throw err
        }
        else {
            console.log('Get Books request processed successfully')
            response.send(books);
        }
    });
})

router.post('/addBook', (req, res) => {
    let book = req.body;
    console.log("Request in post is " + req.body);
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    Books.create(book, function (err, book) {
        if (err) {
            console.log("The error is : " + err);
            res.status(400);
            res.send(err);
        }
        else {
            console.log("The success is : " + book);
            res.send(book);
        }
    })
});

router.put('/updateBook/:bookTitle', (req, res) => {
    var bookTitle = req.params.bookTitle;
    var query = { "name": bookTitle };
    update = req.body;
    console.log("Book to update is " + bookTitle);
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })


    Books.findOneAndUpdate(query, update, (err, book) => {
        if (err) {
            console.log("The error is : " + err);
            res.status(400);
            res.send(err);
        }
        else {
            console.log("The success is : " + book);
            res.send(book);
        }
    })
});
router.delete('/deleteBook/:bookTitle', (req, res) => {
    var bookTitle = req.params.bookTitle;
    var query = { "name": bookTitle };
    toDelete = req.body;
    console.log("Book to update is " + bookTitle);
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    Books.findOneAndRemove(query, toDelete, (err, book) => {
        if (err) {
            console.log("The error is : " + err);
            res.status(400);
            res.send(err);
        }
        else {
            console.log("The success is : " + book);
            res.send(book);
        }
    })
})
module.exports = router;
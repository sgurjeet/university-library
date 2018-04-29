// Importing express
var express = require('express');

//mongoose : dbconnectivity ,provides functions to connect to mongodb easily rather than do in nodejs
var mongoose = require('mongoose')
//body-parser : parse strings to json()
var bodyParser = require('body-parser')

// Making instance of express
const app = express();

// Every method of express instance have this syntax ---> app.<methodName>('path', handleFunction())

var config = require('./config.json');
//connect to mongodb using url provided in config.json
mongoose.connect(config.connectionString);

app.use(bodyParser.json());

//for empty path pick static content (from static folder)
app.use('', express.static('static'));      // Hosting /static 's content on backend --- specificly index.html in /static
app.use('/home/', express.static('static'));

// app.use('', function (request, response, next) {
//     middlewareFunction();
//     next();
// });

// var middlewareFunction = function () {
//     console.log("Middleware test called");
// }

var bookData = [
    { id: 1, title: "Sherlock", author: "Sir Arthur Conan Doyal", isAvail: true },
    { id: 2, title: "1984", author: "George Orwell", isAvail: false },
    { id: 3, title: "To kill a Mockingbird", author: "Harper Lee", isAvail: true },
    { id: 4, title: "Catcher in the Rye", author: "J.D Salinger", isAvail: false }
];

// making a function to handle GET request from /getBook page
/*
    more routing functions :
        app.post()
        app.put()
        app.delete()
        app.use()

*/

app.get('/getBooks', (request, response) => {
    response.send(bookData);
});

//routing /books request to book.js inside models folder
var booksRoute = require('./models/book');
app.use('/books', booksRoute);

const portNumber = 8000;
app.listen(portNumber, () => {
    console.log(`App is listening at ${portNumber}`);
});


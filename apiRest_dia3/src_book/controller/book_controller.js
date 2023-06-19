const Book = require("../models/book");


let book = null;

let getStart = (req, res) => {

    
    let answer = {error: true, codigo: 200, mensaje: "Start here"}
    res.send(answer);
}



let getBook = (req, res) => {

    let answer;

    if(book != null){
        answer = {error: false, codigo: 200, data: book}
    } else {
        answer = {error: true, codigo: 200, mensaje: "this book dosn't exists"}
    }

    res.send(answer)
}


let postBook = (req, res) => {

    let answer;

    if (book == null) {

        book = new Book(
            req.body.title, 
            req.body.type, 
            req.body.author, 
            req.body.price, 
            req.body.photo, 
            req.body.id_book, 
            req.body.id_user);
            
            answer = {error: false, codigo: 200, mensaje: "Book has been create successfully"}
    } else {
        answer = {error: false, codigo: 200, mensaje: "This book already exists"}
    }

        res.send(answer);
        console.log(book);

}

let putBook = (req, res) => {

    let answer;

    if (book != null) {

        book.id_book = req.body.id_book;
        book.title = req.body.title;
        book.type = req.body.type;
        book.author = req.body.author;
        book.price = req.body.price;
        book.photo = req.body.photo;
        book.id_book = req.body.id_book;
        book.id_user = req.body.id_user;

        answer = {error: false, codigo: 200, mensaje: "Book has been updated", data: book}
    } else {
        answer = {error: true, codigo: 200, mensaje: "This book dosn't exist"}
    }

    res.send(answer);
}


let deleteBook = (req, res) => {

    let answer;

    if (book != null) {
        book = null;
        answer = {error: false, codigo: 200, mensaje: "This book is already deleted"}
    } else {

        answer = {error: true, codigo: 200, mensaje: "This book dosn't exists", data: book}
    }

    res.send(answer);
}



module.exports = {getStart, getBook, postBook, putBook, deleteBook}
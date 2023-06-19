const Book = require("../models/book");

let books = [

    new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
    new Book(30310, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
    new Book(41000, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
    new Book(41009, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),
    new Book(77007, 1340098, "El libro tibetano de los muertos", "Espiritualidad, religión", "Padma Sambhava", 16.00, "https://imagessl9.casadellibro.com/a/l/t7/19/9788472453319.jpg"),
    new Book(77008, 120008, "El alquimista", "Novela", "Paulo Cohelo", 9.99, "https://imagessl5.casadellibro.com/a/l/t7/55/9788408144755.jpg"),

];

let getStart = (req, res) => {

    res.send({error: true, codigo: 200, mensaje: "Start here"});
}


let getBooks = (req, res) => {

    res.send(books)
}


let getBookId = (req ,res) => {

    if(req.query.id) {

        for (let i = 0; i< books.length; i++) {

            if(req.query.id == books[i].id_book){
                res.send(Book)
            } 
        } 
    } else {
        res.send(books);
    }

}

let postBooks = (req, res) => {

    let book = new Book (
        
            req.body.title, 
            req.body.type, 
            req.body.author, 
            req.body.price, 
            req.body.photo, 
            req.body.id_book, 
            req.body.id_user
    )
        books.push(book);

        let answer = "Book has been create successfully"
        res.send(answer);
    
}


let putBooks = (req, res) => {

    let answer;

    let id = req.body.id_book;
    let searchBook = books.find(book => book.id_book == id)
    if (searchBook =! undefined){
        searchBook.id_book = req.body.id_book;
        searchBook.title = req.body.title;
        searchBook.type = req.body.type;
        searchBook.author = req.body.author;
        searchBook.price = req.body.photo;
        searchBook.photo = req.body.photo;
        searchBook.id_user = req.body.id_user;

        answer = {error: false, codigo: 200, mensaje: "Uploaded correctly"}
    } else {

        answer = {error: true, codigo: 200, mensaje: "This book doesn't exist"}
    }

    res.send(answer);
}


let deleteBooks = (req, res) => {

    let answer;

    for (let i = 0; books.length; i++) {
        if (req.body.id_book == books[i].id_book) {
            this.books.splice(i, 1);
            answer = {error: false, codigo: 200, mensaje: "This book has been deleted correctly"}
        } else {
            answer = {error: true, codigo: 200, mensaje: "This book doesn't exist"}
        }

        res.send(answer);
    }
}


module.exports = {getStart, getBooks, getBookId, postBooks, putBooks, deleteBooks}
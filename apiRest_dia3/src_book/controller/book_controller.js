const Book = require("../models/book");

let books = [

    new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
    new Book(30310, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
    new Book(41000, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
    new Book(41009, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),
    new Book(77007, 1340098, "El libro tibetano de los muertos", "Espiritualidad, religión", "Padma Sambhava", 16.00, "https://imagessl9.casadellibro.com/a/l/t7/19/9788472453319.jpg"),
    new Book(77008, 120008, "El alquimista", "Novela", "Paulo Cohelo", 9.99, "https://imagessl5.casadellibro.com/a/l/t7/55/9788408144755.jpg"),

]


//// Get book --> obtener book


let getBook = (req ,res) => {

    let answer;

        for (let i = 0; i< books.length; i++) {

            if(req.query.id_book == books[i].id_book){
                answer = {error: false, codigo: 200, message: "The book is here"};
                res.send(Book)
            } else {
                answer = {error: true, codigo: 200, message: "this book doesn't exists"};
                res.send(books);
            } 
        }

    res.send(answer);
}


//// add book --> agregar libro

let postBook = (req, res) => {

    let answer;
    let book;

    if (book == null) {

        let book = {

            id_user: req.body.id_user,
            id_book: req.body.id_book,
            title: req.body.title, 
            type: req.body.type, 
            author: req.body.author, 
            price: req.body.price, 
            photo: req.body.photo, 
        }
            books.push(book)
            answer = {error: false, codigo: 200, message: "Book has been create successfully"}
    } else {
        answer = {error: true, codigo: 200, message: "This book already exists"}
    }

        res.send(answer);

}

//// edit book --> editar libro 

let putBook = (req, res) => {

    let answer;
    let book;

    if (book != null) {

        book.id_user = req.body.id_user;
        book.id_book = req.body.id_book;
        book.title = req.body.title;
        book.type = req.body.type;
        book.author = req.body.author;
        book.price = req.body.price;
        book.photo = req.body.photo;

        answer = {error: false, codigo: 200, message: "Book has been updated"}
    } else {
        answer = {error: true, codigo: 200, message: "This book doesn't exists"}
    }

    res.send(answer);
}

//// delete book --> eliminar libro 


let deleteBook = (req, res) => {

    let answer;
    let book;

    if (book != null) {
        book = null;
        answer = {error: false, codigo: 200, message: "This book is already deleted"}
    } else {

        answer = {error: true, codigo: 200, message: "This book doesn't exists"}
    }

    res.send(answer);
}



module.exports = {getBook, postBook, putBook, deleteBook}
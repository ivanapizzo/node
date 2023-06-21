const Book = require("../models/book");

let books = [

    new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
    new Book(30310, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
    new Book(41000, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
    new Book(41009, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),
    new Book(77007, 1340098, "El libro tibetano de los muertos", "Espiritualidad, religión", "Padma Sambhava", 16.00, "https://imagessl9.casadellibro.com/a/l/t7/19/9788472453319.jpg"),
    new Book(77008, 120008, "El alquimista", "Novela", "Paulo Cohelo", 9.99, "https://imagessl5.casadellibro.com/a/l/t7/55/9788408144755.jpg"),

];

//// Get book --> obtener book

let getBook = (req ,res) => {

    let answer;

        for (let i = 0; i< books.length; i++) {

            if(req.query.id_book == books[i].id_book){
                answer = [books[i]];
            } 
        }

    res.send(answer);
}

// recoge la request que manda el cliente y nosotras enviamos la respuesta

let getBooks = (req, res) => {

    res.send(books);
}


///    get se hace con req.query

// FUNCION para add book

////         todo lo que no es get se hace con req.body

let postBooks = (req, res) => {

    let answer;
    let book;

    if (book == null) {
        let book = new Book (
        
                req.body.id_user,
                req.body.id_book, 
                req.body.title, 
                req.body.type, 
                req.body.author, 
                req.body.price, 
                req.body.photo, 
        )
        books.push(book);
        answer = {error: false, codigo: 200, message: "Book has been create successfully"}

    } else {
        answer = {error: true, codigo: 200, message: "This book already exists"}
    }
    res.send(answer)
    
}



/////////// FUNCION PARA EDIT BOOK ///////////
///// put con req.boy. Busco id del libro para 

let putBooks = (req, res) => {

    let answer;
    let change = req.body.id_book; //// change: modifico book

    for(let i = 0; i < books.length; i++){

        if (change == books[i].id_book){
            
            let book = new Book (
                req.body.id_user,
                req.body.id_book, 
                req.body.title, 
                req.body.type, 
                req.body.author, 
                req.body.price, 
                req.body.photo, 
            )

            books.push(book);
            answer = {error: false, codigo: 200, mensaje: "Uploaded correctly"}

    } else {
            answer = {error: true, codigo: 200, mensaje: "This book doesn't exist"}
        }
    }
    res.send(answer);
}



let deleteBooks = (req, res) => {

    let answer;
    let deleteBook = false;

    for (let i = 0; books.length; i++) {
        if (req.body.id_book == books[i].id_book) {
            books.splice(i, 1);
            deleteBook = true;
        answer = {error: false, codigo: 200, mensaje: "This book has been deleted correctly"}
        }  
        else {
            answer = {error: true, codigo: 200, mensaje: "This book doesn't exists"}
        }
    }
    res.send(answer);
}


module.exports = {getBook, getBooks, postBooks, putBooks, deleteBooks}
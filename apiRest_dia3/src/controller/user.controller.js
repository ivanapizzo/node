const { query } = require("express");
const { response } = require("../app");

// let user = null;

const getUser = (req, res) => {

    // console.log(req.query);
    console.log('Petición recibida por el cliente');

    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    // res.status(200).send({ok: true, message: "Recibido!"})

    let response = ({ ok: true, message: "Recibido!"});
    res.send(response);
}

const bye = (req, res) => {

    // console.log(req.query)

    console.log('Petición recibida de saludo adiós')
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    res.status(200).send({ok: true, message: "Adiós!"})

    // let response = ({ ok: true, message: "Adiós!"});
    // res.send(response);
}


// const postUser = (req, res) => {

//     let user =  {
        
//         name: req.body.name, 
//         surname: req.body.surname,

//         }

//         res.send("Usuario añadido correctamente")
// }


module.exports = {getUser, bye}
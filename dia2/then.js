let readline = require("readline/promises")
let fs = require("fs/promises");
const { rejects } = require("assert");
const {resolve} = require('path');
const { isPromise } = require("util/types");
// const readline = require('readline');

let object = {
    "name": "",
    "surname": "",
    "age": 0
}

// let rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function questions (questions) {

    let question = new Promise ((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // rl.question(questions, (answer) => {
        //     resolve (answer);
        //     rl.close();
        // })
        // return question;

    rl.question('Your name please: ')
    .then((name) => {
        object.name = name;
        return rl.question('Your surname please: ')
                .then((surname) => {
                object.surname = surname;
                return rl.question('Your age please: ')
                .then((age) => {
                    object.age = age;
                    fs.writeFile("user2.json", JSON.stringify(object));
                    console.log('Done');

                    // return fs.readFile("user2.JSON", "utf-8");
                }) 
                .then(() => {
                    return fs.readFile("user2.JSON", "utf-8");
                }) 
                .then(data => {
                    console.log(JSON.parse(data));
                })
                .catch(err => {
                    console.log(err);
                })
                return question;
            })
        })
    })
}

questions();
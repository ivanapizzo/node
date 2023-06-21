const { throws } = require('assert');
const { error } = require('console');
const express = require('express');
let fs = require('fs');
let app = express();
let readLine = require('readline');


let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


function read(callback){

    let object = {

        name: '',
        surname: '',
        age: 0
    
        
    } 

    rl.question('Please input name: ', (name)=>{
        rl.question('Please input surname: ', (surname)=>{
            rl.question('Please input your age: ', (age)=> {
                object.name = name;
                object.surname = surname;
                object.age = age;
                let data = JSON.stringify(object, null, 1);
                fs.writeFile('user.JSON', data, (err) => {
                    if (err) throw err;
                    fs.readFile('user.JSON', (err, data) =>{
                        if (err) throw err;
                        let user_user = JSON.parse(data);
                        callback(user_user);
                        rl.close();
                    })
                })
            })
        })
    })
}

read(console.log);

module.exports = read;


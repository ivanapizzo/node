const fs = require ('fs/promises');
const readline = require ('readline')

let object = {

    "name": "",
    "surname": "",
    "age": 0 
}

function questions (questions) {

    const question = new Promise ((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(questions, (answer) => {
            resolve (answer);
            rl.close();
        })
    })
        return question;
}

async function data(){

    try {
        object.name = await questions ('Your name please: ')
        object.surname = await questions ('Your surname please: ')
        object.age = await questions ('Your age please: ')
        await fs.writeFile("user_3.json", JSON.stringify(object));
        let newOne = await fs.readFile("user_3.json", 'utf8');

        console.log(JSON.parse(newOne));
    }

    catch (error){
        console.log(error);
    }
}

data();
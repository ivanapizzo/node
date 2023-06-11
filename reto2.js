const { error } = require("console");
let fs = require("fs");


let object = {

        name: '',
        surname: '',
        age: 0
    
}

let doJson = JSON.stringify(object);

fs.writeFile("user_user", doJson, (error) => {
    if (error) {
        console.log("not ok", error);
    } else {
        console.log("ok");
    }
})

fs.readFile("user_user", (error, data) => {

    if(error) {
        console.log("not ok", error)
    } else {
        console.log("ok");
    }

    let user = JSON.parse(data)

    console.log(user);
})

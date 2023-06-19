const app = require ("./book_app")

app.listen(app.get("port"), ()=> {
    console.log("Server listen on port " + app.get("port"))
})
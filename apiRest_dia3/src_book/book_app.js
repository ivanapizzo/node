const express = require("express");
const cors = require('cors');
const userRouter = require('./routers/book_routers');
const usarRouter = require('./routers/books_routers');
const errorHandling = require('./error/errorHandling');

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(userRouter);
app.use(usarRouter);
app.use((req, res, next) => {
    res.status(404).json({
        error:true,
        code: 404,
        message: "Endpoint doesn't found"
    })
})

app.use(errorHandling);

module.exports = app;

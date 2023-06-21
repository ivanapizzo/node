const express = require("express");
const cors = require('cors');
const userRouter = require('../src/routers/user.routers');
const errorHandling = require('./error/errorHandling');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(userRouter);
app.use((req, res, next) => {
    res.status(404).json({
        error:true,
        code: 404,
        message: 'Endpoint not finded'
    })
})

app.use(errorHandling);

module.exports = app;
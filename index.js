"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
    $ npm i ejs
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// set template engine
app.set('view engine','ejs')  
// default folder './views' 
app.set('views','public')

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:
// Accept JSON:
app.use(express.json())

app.use(express.urlencoded({extended:true} ))
app.all('/',(req,res)=>{
    // res.render('index.ejs')
    res.render('index')


})

app.use('/api',require('./src/routes/movie'))
app.use('/view',require('./src/routes/movieTemplate'))

// Check Token:
app.use(require("./src/middlewares/authentication"));

// morgan-logger:
// app.use(require("./src/middlewares/logger")); //*IN Comment coz of Deployment

// res.getModelList:
app.use(require("./src/middlewares/findSearchSortPage"));




// SessionsCookies:
app.use(require('cookie-session')({ secret: process.env.SECRET_KEY }))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Movie API',
        session: req.session,
        isLogin: req.isLogin
    })
})

// // auth:
// app.use("/auth", require("./src/routes/auth"));

// // token:
// app.use("/tokens", require("./src/routes/token"));

// // user:
// app.use("/users", require("./src/routes/user"));

// // category:
// app.use("/categories", require("./src/routes/category"));

// // movie:
// app.use("/movies", require("./src/routes/movie"));

// // comment:
// app.use("/comments", require("./src/routes/comment"));

// // document:
// app.use("/documents", require("./src/routes/document"));

// //postLike:
// app.use("/movies/:id/postLike", require("./src/routes/movie"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
//require('./src/helpers/sync')()
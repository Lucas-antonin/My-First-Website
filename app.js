const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require('path')
const handlebars = require("express-handlebars")
const session = require("express-session")
const foxRoutes = require("./rotes/routes")
require("./models/Foxlinks")


app.use(express.static(__dirname + "/public"))

//Config bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Session
app.use(session({
    secret: "themanbehindtheslaughter131",
    resave: true,
    saveUninitialized: true
}))

//Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('views engine', 'handlebars')

//Config mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/foxvideos").then(()=>{
    console.log("Connected with database")
}).catch((err)=>{
    console.log("Error when trying to connect to the MongoDB")
})


//Routes
app.use("/", foxRoutes)


app.listen(8081, ()=>{
    console.log("Server have been opened")
})
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")

require("./models/Foxlinks")

//variables
const foxlink = mongoose.model("links")
let foxEat = [{ name:"Leporids"}, { name:"Raccoons"}, { name:"Squirrels"}, { name:"Hamster"}, { name:"Gerbils"}, { name:"Gopher"}, { name:"Arvicolinae"}, { name:"Murids"}, { name:"Opossums"}]
let species = [{ name:"Red Fox"}, {name: "Bengal Fox"}, {name: "Rüppell's Fox"}, {name: "Kit Fox"},{name: "Swift Fox"},{name:"Tibetan Sand Fox"}, {name:"Corsac Fox"}, {name:"Cape Fox"}, {name:"Blanford's Fox"}, {name:"Pale Fox"}, {name:"Fennec Fox"}, {name:"Arctic Fox"}]
let data = {a:foxEat,b:species}

//Config bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Session
app.use(session({
    secret: "themanbehindtheslaughter131",
    resave: true,
    saveUninitialized: true
}))


//Config mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/foxvideos",{
    useMongoCliente: true
}).then(()=>{
    console.log("Connected with database")
}).catch((err)=>{
    console.log("Error when trying to connect to the MongoDB")
})

app.use(express.static(__dirname + "/public"))



//Routes
app.get('/', (req, res)=>{
    res.render(__dirname + "/app/views/index.ejs")
})
app.get("/pictures",(req,res)=>{
    res.render(__dirname + "/app/views/index3.ejs")
})

app.get("/album", (req,res)=>{
    res.render(__dirname + '/app/views/index2.ejs')
})

app.get("/videos", (req,res)=>{
    let advideo = req.body.link;
 res.render(__dirname + '/app/views/index4.ejs', {adv:advideo})
})

app.get("/list", (req,res)=>{
    res.render(__dirname + "/app/views/index5.ejs", {data:data})
})
app.post("/links", (req,res)=>{
        const newLink = {
            link: req.body.link
        }
        new foxlink(newLink).save().then(() => {
            console.log("Link saved successfully")
        }).catch((err) => {
            console.log("Error saving link:" + err)
        })
})


app.listen(8081, ()=>{
    console.log("Server have been opened")
})
const express = require("express")
const app = express()
//variables
let foxEat = [{ name:"Leporids"}, { name:"Raccoons"}, { name:"Squirrels"}, { name:"Hamster"}, { name:"Gerbils"}, { name:"Gopher"}, { name:"Arvicolinae"}, { name:"Murids"}, { name:"Opossums"}]
let species = [{ name:"Red Fox"}, {name: "Bengal Fox"}, {name: "Rüppell's Fox"}, {name: "Kit Fox"},{name: "Swift Fox"},{name:"Tibetan Sand Fox"}, {name:"Corsac Fox"}, {name:"Cape Fox"}, {name:"Blanford's Fox"}, {name:"Pale Fox"}, {name:"Fennec Fox"}, {name:"Arctic Fox"}]
let data = {a:foxEat,b:species}

app.use(express.static(__dirname + "/public"))

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
 res.render(__dirname + '/app/views/index4.ejs')
})

app.get("/list", (req,res)=>{
    res.render(__dirname + "/app/views/index5.ejs", {data:data})
})

app.listen(8081, ()=>{
    console.log("Server have been opened")
})
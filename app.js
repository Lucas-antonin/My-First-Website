const express = require("express")
const app = express()

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

app.listen(8081, ()=>{
    console.log("Server have been opened")
})
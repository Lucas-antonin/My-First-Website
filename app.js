const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/app/views/index.html")
})
app.get("/pictures",(req,res)=>{
    res.sendFile(__dirname + "/app/views/index3.html")
})

app.get("/album", (req,res)=>{
    res.sendFile(__dirname + '/app/views/index2.html')
})

app.get("/videos", (req,res)=>{
 res.sendFile(__dirname + '/app/views/index4.html')
})

app.listen(8081, ()=>{
    console.log("Server have been opened")
})
const express = require("express");
const router = express.Router();
require("../models/Foxlinks")
const controller = require("../controller")

router.get('/', (req, res)=>{
    res.render("../views/index.handlebars")
})
router.get("/pictures",(req,res)=>{
    res.render( "../views/index3.handlebars")
})

router.get("/album", (req,res)=>{
    res.render('../views/index2.handlebars')
})

router.get("/videos",controller.videosSearch)


router.post("/links", controller.linkValidation)

module.exports = router;
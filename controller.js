const mongoose = require("mongoose");
const foxlink = mongoose.model("links")

module.exports ={

    linkValidation: async(req,res,next)=>{
      try {

          var erros = []
          var link = req.body.link

          function getId(link) {
              const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
              const match = link.match(regExp);

              return (match && match[2].length === 11)
                  ? match[2]
                  : null;
          }

          if (link != undefined || link != '') {
              var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
              var match = link.match(regExp);
              if (match && match[2].length == 11) {
                  var videoId = getId(link)
                link = "//www.youtube.com/embed/" + videoId
              } else {
                  erros.push({texto: "Invalid url"})
              }
          }


          if(erros.length > 0){
              console.log("Erro ao salvar link")
          }else{
              const newLink = {

                  link: link
              }
              new foxlink(newLink).save().then(() => {
                  res.redirect("/videos")
                  console.log("Link saved successfully")
              }).catch((err) => {
                  console.log("Error saving link:" + err)
              })

          }
      }catch(e) {
              next(e)
          }

    },videosSearch: async(req,res,next)=>{
        try{
            foxlink.find().then((link)=>{
                res.render('../views/index4.handlebars',  {link: link.map(link => link.toJSON())})
            }).catch((err)=>{
                console.log("ERRO")
            })
        }catch(e){
            next(e)
        }
    }


}

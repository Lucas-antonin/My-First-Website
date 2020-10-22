const mongoose = require("mongoose");
const foxlink = mongoose.model("links")

module.exports ={

    linkValidation: async(req,res,next)=>{
      try {

          var erros = []
          var link = req.body.link



          if (link != undefined || link != '') {
              var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
              var match = link.match(regExp);
              if (match && match[2].length == 11) {

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
                  console.log("Link saved successfully")
              }).catch((err) => {
                  console.log("Error saving link:" + err)
              })

          }
      }catch
          (e)
          {
              next(e)
          }

    }


}

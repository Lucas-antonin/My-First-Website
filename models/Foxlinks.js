const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const links = new Schema({
    link: {
        type: String,
        require: true
    }
})

mongoose.model("links", links)
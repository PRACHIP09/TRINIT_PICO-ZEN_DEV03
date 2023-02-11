const mongoose = require("mongoose");
const validator = require('validator')

const YtSchema = new mongoose.Schema({
    name: {
        type: String,
    },


    title:{
        type:String
    },

    link: {
        type: String,

    },




});
module.exports = mongoose.model("Yt", YtSchema);
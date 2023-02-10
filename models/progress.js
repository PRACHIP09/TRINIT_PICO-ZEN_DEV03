const mongoose = require("mongoose");
const validator = require('validator')

const ProgressSchema = new mongoose.Schema({

    progress_logo: {
        type: Buffer,
      },
    
    progress_logo_url: {
        type: String,
      },

    progress:{
        type:String,

    },

    user_progress:{
        type:String
    }



});

ProgressSchema.methods.toJSON = function () {
    const progress = this
    const progressObject = progress.toObject()
  
    delete progressObject.progress_logo
    
    
  
    return progressObject
  }

module.exports = mongoose.model("Progress", ProgressSchema);
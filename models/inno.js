const mongoose = require("mongoose");
const validator = require('validator')

const InnoSchema = new mongoose.Schema({

    inno_logo: {
        type: Buffer,
      },
    
    inno_logo_url: {
        type: String,
      },

    inno:{
        type:String,

    },

    user_inno:{
        type:String
    }



});

InnoSchema.methods.toJSON = function () {
    const inno = this
    const innoObject = inno.toObject()
  
    delete innoObject.inno_logo
    
    
  
    return innoObject
  }

module.exports = mongoose.model("Inno", InnoSchema);
const mongoose = require("mongoose");
const validator = require('validator')

const SchemeSchema = new mongoose.Schema({

    skill_logo: {
        type: Buffer,
      },
    
      skill_logo_url: {
        type: String,
      },

    donation:{
        type:String,

    },

    know_more: {
        type: String,

    },


    desc:{
        type:String,
        required:true
    }

});

SchemeSchema.methods.toJSON = function () {
    const skill = this
    const skillObject = skill.toObject()
  
    delete skillObject.skill_logo
    
    
  
    return skillObject
  }

module.exports = mongoose.model("Scheme", SchemeSchema);
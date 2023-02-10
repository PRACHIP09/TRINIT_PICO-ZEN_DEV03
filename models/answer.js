const mongoose = require("mongoose");
const validator = require('validator')

const AnswerSchema = new mongoose.Schema({

    answer_logo: {
        type: Buffer,
      },
    
      answer_logo_url: {
        type: String,
      },

    answer:{
        type:String,

    },

    user_name:{
        type:String
    },

    user_email:{
        type:String
    },

    q_id:{
        type:String,
    },

    q:{
        type:String
    }


});

AnswerSchema.methods.toJSON = function () {
    const answer = this
    const answerObject = answer.toObject()
  
    delete answerObject.answer_logo
    
    
  
    return answerObject
  }

module.exports = mongoose.model("Answer", AnswerSchema);
const mongoose = require("mongoose");
const validator = require('validator')

const QuestionSchema = new mongoose.Schema({

    question_logo: {
        type: Buffer,
      },
    
      question_logo_url: {
        type: String,
      },

    question:{
        type:String,

    },

    user_name:{
        type:String
    },

    user_email:{
        type:String
    },

    ref_q:{
        type:String,
    },


});

QuestionSchema.methods.toJSON = function () {
    const question = this
    const questionObject = question.toObject()
  
    delete questionObject.question_logo
    
    
  
    return questionObject
  }

module.exports = mongoose.model("Question", QuestionSchema);
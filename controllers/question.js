const Question = require('../models/question.js');

exports.createQuestion = async (req, res) => {
    try {


      const newQuestion = new Question({
        ...req.body,
        user_name:req.user.name,
        user_email:req.user.email
        
      })
  
      
    
      
        await newQuestion.save()
        res.status(201).json({
          success: true,
          data: newQuestion
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getQuestions = async (req,res) => {
    try{
        const getQuestion = await Question.find({})

        res.json({
            success: true,
            data: getQuestion
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



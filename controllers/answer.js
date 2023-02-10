const Answer = require('../models/answer.js');
const Question = require('../models/question.js');

exports.createAnswer = async (req, res) => {
    try {


        
        const que = await Question.findById(req.params.id)
        
        ans_que =que.question 
        // console.log(ans_que)

      const newAnswer = new Answer({
        ...req.body,
        q_id:req.params.id,
        user_name:req.user.name,
        user_email:req.user.email,
        q:ans_que
        
      })
  
      
    
      
        await newAnswer.save()

        


        res.status(201).json({
          success: true,
          data: newAnswer
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getAnswers = async (req,res) => {
    try{
        const getAnswer = await Answer.find({})

        res.json({
            success: true,
            data: getAnswer
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



exports.getAnswersByQue = async (req,res) => {
    try{
        const getAnswerByq = await Answer.find({q_id:req.params.id})

        res.json({
            success: true,
            data: getAnswerByq
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}
const QAScheme = require('../models/qascheme.js');
const Scheme = require('../models/scheme.js');

exports.createQuestion = async (req, res) => {
    try {


        
        const sche = await Scheme.findById(req.params.id)
        
        desc_sche =sche.desc 
        // console.log(ans_sche)

      const newQuestion = new QAScheme({
        ...req.body,
        s_id:req.params.id,
        user_name:req.user.name,
        user_email:req.user.email,
        s_desc:desc_sche
        
        
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

exports.getQASchemes = async (req,res) => {
    try{
        const getQAScheme = await QAScheme.find({})

        res.json({
            success: true,
            data: getQAScheme
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}



exports.getQASchemesBysche = async (req,res) => {
    try{
        const getQASchemeByq = await QAScheme.find({q_id:req.params.id})

        res.json({
            success: true,
            data: getQASchemeByq
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.createAnsschemesBysche = async (req,res) => {
    try{
        const getQASchemeByq = await QAScheme.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        
        

        res.json({
            success: true,
            data: getQASchemeByq
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}
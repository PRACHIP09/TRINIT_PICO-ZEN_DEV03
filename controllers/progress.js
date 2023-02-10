const Progress = require('../models/progress.js');

exports.createProgress = async (req, res) => {
    try {


      const newProgress = new Progress({
        ...req.body,
        user_progress:req.user.name
        
      })
  
      
    
      
        await newProgress.save()
        res.status(201).json({
          success: true,
          data: newProgress
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getProgress = async (req,res) => {
    try{
        const getProgress = await Progress.find({})

        res.json({
            success: true,
            data: getProgress
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.deleteProgress = async (req, res) => {
    try {
        const currentProgress = await Progress.findByIdAndDelete(req.body.id);
        if (!currentProgress) {
            res.status(404).json({
                message: "Progress not found!"
            });
        } else {
             res.status(200).json({
                 message: "Progress deleted!"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
  };
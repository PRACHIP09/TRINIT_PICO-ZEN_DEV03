const Scheme = require('../models/scheme.js');

exports.createScheme = async (req, res) => {
    try {


      const scheme = new Scheme({
        ...req.body,
        
      })
  
      
    
      
        await scheme.save()
        res.status(201).json({
          success: true,
          data: scheme
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getSchemes = async (req,res) => {
    try{
        const getscheme = await Scheme.find({})

        res.json({
            success: true,
            data: getscheme
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.deleteScheme = async (req, res) => {
    try {
        const currentScheme = await Scheme.findByIdAndDelete(req.body.id);
        if (!currentScheme) {
            res.status(404).json({
                message: "Scheme not found!"
            });
        } else {
             res.status(200).json({
                 message: "Scheme deleted!"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
  };
const Inno = require('../models/inno.js');

exports.createInno = async (req, res) => {
    try {


      const newInno = new Inno({
        ...req.body,
        user_inno:req.user.name
        
      })
  
      
    
      
        await newInno.save()
        res.status(201).json({
          success: true,
          data: newInno
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getInno = async (req,res) => {
    try{
        const getInno = await Inno.find({})

        res.json({
            success: true,
            data: getInno
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.deleteInno = async (req, res) => {
    try {
        const currentInno = await Inno.findByIdAndDelete(req.body.id);
        if (!currentInno) {
            res.status(404).json({
                message: "Inno not found!"
            });
        } else {
             res.status(200).json({
                 message: "Inno deleted!"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
  };
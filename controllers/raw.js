const Raw = require('../models/raw.js');

exports.createRaw = async (req, res) => {
    try {


      const newRaw = new Raw({
        ...req.body,
        // far_name:{
        //     type: String
        // },
    
        // far_phone:{
        //     type: Number
        // },
    
        // far_email:{
        //     type:String
        // },
    
        // far_add: {
        //     type: String
        // },

        far_name: req.user.name,
        far_phone: req.user.phone,
        far_email: req.user.email,
        far_add: req.user.address,
        far_id:req.user._id
        
      })
  
      
    
      
        await newRaw.save()
        res.status(201).json({
          success: true,
          data: newRaw
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getRaws = async (req,res) => {
    try{
        const getRaw = await Raw.find({})

        res.json({
            success: true,
            data: getRaw
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}
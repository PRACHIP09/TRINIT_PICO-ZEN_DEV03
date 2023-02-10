const Enq = require('../models/enq.js');

exports.createEnq = async (req, res) => {
    try {


      const enq = new Enq({
        ...req.body,
        // email:req.user.email,
      })
  
      
    
      
        await enq.save()
        res.status(201).json({
          success: true,
          data: enq
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getEnqs = async (req,res) => {
    try{
        const getEnq = await Enq.find({})

        res.json({
            success: true,
            data: getEnq
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}
const Yt = require('../models/yt.js');

exports.createYt = async (req, res) => {
    try {

        
      const yt = new Yt({
        ...req.body,
        // email:req.user.email,
      })
  
      
    
      
        
        res.status(201).json({
          success: true,
          data: yt
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}
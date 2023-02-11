const Product = require('../models/product.js');

exports.createProduct = async (req, res) => {
    try {


      const newProduct = new Product({
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
  
      
    
      
        await newProduct.save()
        res.status(201).json({
          success: true,
          data: newProduct
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.getProducts = async (req,res) => {
    try{
        const getProduct = await Product.find({})

        res.json({
            success: true,
            data: getProduct
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.deleteProduct = async (req, res) => {
  try {
      const currentProduct = await Product.findByIdAndDelete(req.body.id);
      if (!currentProduct) {
          res.status(404).json({
              message: "Product not found!"
          });
      } else {
           res.status(200).json({
               message: "Product deleted!"
          });
      }
  } catch (error) {
      res.status(400).json({
          message: error.message
      });
  }
};
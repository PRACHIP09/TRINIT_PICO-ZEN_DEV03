const mongoose = require("mongoose");
const validator = require('validator')

const ProductSchema = new mongoose.Schema({

    product_logo: {
        type: Buffer,
      },
    
    product_logo_url: {
        type: String,
      },

    cost:{
        type:String,

    },

    // know_more: {
    //     type: String,

    // },


    desc:{
        type:String,
        required:true
    },

    far_id:{

    },

    far_name:{
        type: String
    },

    far_phone:{
        type: Number
    },

    far_email:{
        type:String
    },

    far_add: {
        type: String
    },
    buyer_id :{
        type: mongoose.Schema.Types.ObjectId,

    },

});


ProductSchema.virtual('users', {
    ref: 'User',
    localField: 'buyer_id',
    foreignField: 'product'
  })

ProductSchema.methods.toJSON = function () {
    const product = this
    const productObject = product.toObject()
  
    delete productObject.product_logo
    
    
  
    return productObject
  }

module.exports = mongoose.model("Product", ProductSchema);
const mongoose = require("mongoose");
const validator = require('validator')

const CartSchema = new mongoose.Schema({

    // product_logo: {
    //     type: Buffer,
    //   },
    
    // product_logo_url: {
    //     type: String,
    //   },

    // cost:{
    //     type:String,

    // },

    // // know_more: {
    // //     type: String,

    // // },


    // desc:{
    //     type:String,
    //     required:true
    // },

    // far_id:{

    // },

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
     buyer_id :{
         type: mongoose.Schema.Types.ObjectId,

     },

    product_id:{
             type: String,
    
         },

    quantity:{
        type:Number
    },
    cost:{
        type:Number
    },






    desc:{
        type:String,
        //required:true
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
    total_cost:{
        type:Number
    },

});
module.exports = mongoose.model("Cart", CartSchema);

//CartSchema.virtual('products', {
//     ref: 'Product',
//     localField: 'product_id',
//     // foreignField: 'product'
// })
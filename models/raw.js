const mongoose = require("mongoose");
const validator = require('validator')

const RawSchema = new mongoose.Schema({

    raw_logo: {
        type: Buffer,
      },
    
    raw_logo_url: {
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
        type: String

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


RawSchema.virtual('users', {
    ref: 'User',
    localField: 'buyer_id',
    foreignField: 'Raw'
  })

RawSchema.methods.toJSON = function () {
    const raw = this
    const rawObject = raw.toObject()
  
    delete rawObject.raw_logo
    
    
  
    return rawObject
  }

module.exports = mongoose.model("Raw", RawSchema);
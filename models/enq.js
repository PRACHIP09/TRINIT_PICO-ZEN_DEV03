const mongoose = require("mongoose");
const validator = require('validator')

const EnqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    phone:{
        type:Number,
        unique:true,
        required: true,
        minlenght:[10,'10 digits'],
        maxlenght:[10,'10 digits']
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },


    enquiry:{
        type:String,
        required:true
    }

});
module.exports = mongoose.model("Enq", EnqSchema);
const mongoose = require("mongoose");
const validator = require('validator')

const QASchemeSchema = new mongoose.Schema({


    answer:{
        type:String,

    },

    user_name:{
        type:String
    },

    user_email:{
        type:String
    },

    s_id:{
        type:String,
    },
    s_desc:{
        type:String
    },
    q:{
        type:String
    }


});



module.exports = mongoose.model("QAScheme", QASchemeSchema);
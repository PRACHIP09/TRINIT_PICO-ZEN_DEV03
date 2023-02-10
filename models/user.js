const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        phone:{
            type:Number,
            unique:[true,'Phone Number should be unique'],
            required: true,
            minlenght:[10,'10 digits'],
            maxlenght:[10,'10 digits']
        },



        email: {
            type: String,
            unique: [true,'Email should be unique'],
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
                }
            }
        },


        address: {
            type:String
        },





        password: {
            type: String,
            required: true,
            trim: true,
            minlength: [8, 'Password too short!'],
            maxlength: [128, 'Password too long!']
        },

        product: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
          }],



 

        type: {
            type: String,
            required: true,
            enum: ["ENTHUSIASTS", "FARMER", "GOVERNMENT"]
        },


        avatar: {
            type: Buffer
        },
        avatar_url: {
          type: String
      },
      






        tokens: [{
            token: {
                type: String, 
                required: true
            }
        }]
    },
    { timestamps: true }
);



// Hashing the password


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.pre('save', async function(next) {
    let currentUser = this;
    if(!currentUser.isModified('password')) { 
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        currentUser.password = await bcrypt.hash(currentUser.password, salt);
        return next();
    } catch(error) {
        return next(error);
    }
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, "thisissecretkey"); 
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
} 
  
userSchema.statics.findByCredentials = async function ( email, password ) {
    const user = await this.findOne({ email });
  
    if(!user) {
        throw new Error('Unable to login');
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if(!isMatch) {
        throw new Error('Unable to login');
    }
  
    return user;
}

const User = mongoose.model('User', userSchema)

module.exports = User
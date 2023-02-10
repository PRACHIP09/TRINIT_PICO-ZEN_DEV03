const User = require('../models/user.js');
const bcrypt = require('bcryptjs')

const nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'anonyanony252@gmail.com',
        pass:'xrwmmxebaecfpowe'

    },
    port:465
})


exports.createUser = async (req, res) => {
    try {
      const user = new User(req.body)
  
      const token = await user.generateAuthToken()
    
      
        await user.save()
        res.status(201).json({
          success: true,
          data: user, token
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })
      }
}

exports.loginUser = async (req, res) => {
    try{
      
  
      const user = await User.findByCredentials(req.body.email, req.body.password)
  
      const token = await user.generateAuthToken()
      //login(req.body.email)
  
      res.status(201).json({
        success: true,
        data: user, token
      })
  
    } catch(e){
      console.log(e)
      res.status(400).json({
        success: false,
        message: "Check Email or Password"
      })
    }
  }
exports.logoutUser = async (req,res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
          return token.token !== req.token
      })
      await req.user.save()
  
      res.status(200).json({
        message: 'Logged Out Successfully'
    });
  } catch (e) {
      res.status(500).send()
  }
  
  }
exports.getUsers = async (req,res) => {
    try{
        const getUser = await User.find({})
        if (!getUser.length) {
          throw new Error('No users!')
         }
        res.json({
            success: true,
            data: getUser
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

exports.updateUser = async (req, res) => {
      
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','address','phone','email','license','gstn']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
  
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
    

        
        res.json({
          success: true,
          data: req.user
        })
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e.message
      })
  
    }
}

exports.viewUser = async (req, res) => {
    res.send(req.user);
};

exports.deleteUser = async (req, res) => {
    try {
        const currentUser = await User.findByIdAndDelete(req.body.userID);
        if (!currentUser) {
            res.status(404).json({
                message: "User not found!"
            });
        } else {
             res.status(200).json({
                 message: "User deleted!"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

exports.forgotPassword = async (req,res) => {
    try{

        let newPass = Math.floor((Math.random()*100000000)+1).toString()
        const saltnew = await bcrypt.genSalt(10);
        newPassword = await bcrypt.hash(newPass, saltnew);
        const validPassword = await bcrypt.compare(newPass, newPassword);
        



    

        const checkRegistered = await User.find({email: req.body.email})

        if (!checkRegistered.length) {
            throw new Error('User not found');
           }

        const updatedPassUser = await User.findOneAndUpdate({email: req.body.email}, {password: newPassword}, {new:true})
        console.log(checkRegistered) 
        console.log(updatedPassUser) 
        transporter.sendMail({
            from:"anonyanony252@gmail.com",
            to:req.body.email,
            subject:`Your Password Has Been Updated `,
            text:`Your new Password is ${newPass} `
          }) 
        res.json({
            success: true,
            message: "Password changed",
            data: updatedPassUser
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.changePassword = async (req, res) => {
      
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }


  
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()

        let unhasP = req.user.password
        const saltnewPass = await bcrypt.genSalt(10);
        newPasswordchange = await bcrypt.hash(unhasP, saltnewPass);
        req.user.password = newPasswordchange

        console.log(req.user.password)
        
        
    

        
        res.json({
          success: true,
          data: req.user
        })
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e.message
      })
  
    }
}

exports.verifyPassword = async (req, res) => {
    try{
      
  
      const user = await User.findByCredentials(req.user.email, req.body.password)
  
      
      //login(req.body.email)
  
      res.status(201).json({
        success: true,
        data: user
      })
  
    } catch(e){
      console.log(e)
      res.status(400).json({
        success: false,
        message: "Check  Password"
      })
    }
  }



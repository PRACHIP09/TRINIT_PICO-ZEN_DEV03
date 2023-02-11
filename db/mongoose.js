const mongoose = require('mongoose')

mongoose.connect(
  "",
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
  }
)

//
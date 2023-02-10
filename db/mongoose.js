const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://user-ojasy:goaldiggers2020@cluster0.btfod.mongodb.net/hackathon?retryWrites=true&w=majority",
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
  }
)

//mongodb+srv://user-ojasy:goaldiggers2020@cluster0.btfod.mongodb.net/hackathon?retryWrites=true&w=majority
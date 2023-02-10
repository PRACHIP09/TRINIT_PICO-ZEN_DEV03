const express = require('express') 
const cors = require("cors")
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
})

app.use(
    cors({
      origin: true,
    })
);
const userRouter = require('./routers/user')
const enqRouter = require('./routers/enq')
const schemeRouter = require('./routers/scheme')
const productRouter = require('./routers/product')
const questionRouter = require('./routers/question')
const answerRouter = require('./routers/answer')
const progressRouter = require('./routers/progress')
const innoRouter = require('./routers/inno')
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/enq',enqRouter)
app.use('/api/scheme',schemeRouter)
app.use('/api/product',productRouter)
app.use('/api/question',questionRouter)
app.use('/api/answer',answerRouter)
app.use('/api/progress',progressRouter)
app.use('/api/inno',innoRouter)

const User = require('./models/user.js');
const nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'anonyanony252@gmail.com',
        pass:'xrwmmxebaecfpowe'

    },
    port:465
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
app.use(express.json())
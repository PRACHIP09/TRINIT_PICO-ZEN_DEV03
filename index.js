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
const rawRouter = require('./routers/raw')
const questionRouter = require('./routers/question')
const answerRouter = require('./routers/answer')
const progressRouter = require('./routers/progress')
const innoRouter = require('./routers/inno')
const qaschemeRouter = require('./routers/qascheme')
const cartRouter = require('./routers/cart')
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/enq',enqRouter)
app.use('/api/scheme',schemeRouter)
app.use('/api/product',productRouter)
app.use('/api/question',questionRouter)
app.use('/api/answer',answerRouter)
app.use('/api/progress',progressRouter)
app.use('/api/inno',innoRouter)
app.use('/api/raw',rawRouter)
app.use('/api/qascheme',qaschemeRouter)
app.use('/api/cart',cartRouter)

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


// app.post('/wiki', (req, res), async () => {
// 	try {
// 		const page = await wiki.page('Batman');
// 		console.log(page);
// 		//Response of type @Page object
// 		const summary = await page.summary();
// 		console.log(summary);
// 		//Response of type @wikiSummary - contains the intro and the main image
// 	} catch (error) {
// 		console.log(error);
// 		//=> Typeof wikiError
// 	}
// })

const wiki = require('wikipedia');
app.post('/api/getinfo', async (req, res) => {
    try{
    const page = await wiki.page(req.body.search);
    // console.log(page.fullurl);
    
    const intro = await page.intro()
    // console.log(intro)

    data= {
        "link":page.fullurl,
        "intro":intro
    }

    res.status(201).json({
        success: true,
        data: data
      })
    }catch(e){
      res.status(400).json({
        success: false,
        message: e.message
      })
    }

    //Response of type @wikiSummary - contains the intro and the main image

}

    
    
)


const cron = require('node-cron');

async function sendMail() {
    emails = await User.find({type:"ENTHUSIASTS"}).select({ "email": 1, "_id": 0})
    //forEach
    console.log(emails)
    emails.forEach((email)=>  transporter.sendMail({
          from:"anonyanony252@gmail.com",
          to:email,
          subject:`PLANT HEALTH UPDATE!!!`,
          text:`HI THERE PLEASE WATER YOUR PLANTS AND ENSURE THEY NUTRITIONED!!!
          HAPPY PLANTING!!!! `
        })
        )
}


cron.schedule('0 0 7 * * *', () =>
sendMail() 

);



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
app.use(express.json())
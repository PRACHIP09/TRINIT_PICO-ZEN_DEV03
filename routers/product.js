const express = require('express')
const auth = require('../middleware/auth')
const Product = require('../models/product')
const router = new express.Router()
const multer = require('multer')
const {
  createProduct,
  getProducts,
  deleteProduct,
  

} = require('../controllers/Product')

router.post('/new',[auth.verifyjwt,auth.userTypeFarmer], createProduct)
router.get('/getAll',[auth.verifyjwt], getProducts)
// router.delete('/delete',[auth.verifyjwt, auth.userTypeFarmer], deleteProduct)


const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
  
        cb(undefined, true)
    }
  })
  router.post('/:id/product_logo',[auth.verifyjwt,auth.userTypeFarmer], upload.single('product_logo'), async (req, res) => {
    const product = await Product.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/product_logo`
    
    
    product.product_logo = req.file.buffer
    product.product_logo_url = link
    await product.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/product_logo',[auth.verifyjwt,auth.userTypeFarmer], async (req, res) => {
    const skill = await Product.findById(req.params.id)
    skill.product_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/product_logo', async (req, res) => {
    try {
        const skill = await Product.findById(req.params.id)
  
        if (!skill || !skill.product_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.product_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
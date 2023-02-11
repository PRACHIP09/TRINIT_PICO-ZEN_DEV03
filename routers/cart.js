const express = require('express')
const auth = require('../middleware/auth')

const router = new express.Router()
const {
  createCart,
  addQuantity,
  getProducts,
  deleteProduct,
  

} = require('../controllers/cart')

router.post('/new/:id', [auth.verifyjwt],createCart)
router.post('/add/:id',[auth.verifyjwt], addQuantity)
router.get('/getmyCart/:id',[auth.verifyjwt],getProducts)
router.delete('/remove/:id',[auth.verifyjwt],deleteProduct)

module.exports = router
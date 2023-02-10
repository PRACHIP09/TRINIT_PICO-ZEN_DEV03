const express = require('express')
const auth = require('../middleware/auth')

const router = new express.Router()
const {
  createEnq,
  getEnqs,
  

} = require('../controllers/enq')

router.post('/new', createEnq)
router.get('/getAll',[auth.verifyjwt,auth.userTypeGovernment], getEnqs)

module.exports = router
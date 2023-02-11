const express = require('express')
const auth = require('../middleware/auth')
const QAScheme = require('../models/qascheme')
const router = new express.Router()
const multer = require('multer')
const {
  createQuestion,
  getQASchemes,
  getQASchemesBysche,
  createAnsschemesBysche
//   getAnswers,
//   getAnswersByQue,
//   deleteAnswer,
  

} = require('../controllers/qascheme')



router.post('/new/:id',[auth.verifyjwt], createQuestion)
router.get('/getAll',[auth.verifyjwt], getQASchemes)
router.get('/get/:id',[auth.verifyjwt], getQASchemesBysche)
router.post('/newans/:id',[auth.verifyjwt], createAnsschemesBysche)


module.exports = router
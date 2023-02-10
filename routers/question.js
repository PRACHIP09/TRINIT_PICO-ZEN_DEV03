const express = require('express')
const auth = require('../middleware/auth')
const Question = require('../models/question')
const router = new express.Router()
const multer = require('multer')
const {
  createQuestion,
  getQuestions,
  deletequestion,
  

} = require('../controllers/question')

router.post('/new',[auth.verifyjwt], createQuestion)
router.get('/getAll', getQuestions)
// router.delete('/delete',[auth.verifyjwt, auth.userTypeFarmer], deletequestion)


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
  router.post('/:id/question_logo',[auth.verifyjwt,auth.userTypeFarmer], upload.single('question_logo'), async (req, res) => {
    const question = await Question.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/question_logo`
    
    
    question.question_logo = req.file.buffer
    question.question_logo_url = link
    await question.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/question_logo',[auth.verifyjwt,auth.userTypeFarmer], async (req, res) => {
    const skill = await Question.findById(req.params.id)
    skill.question_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/question_logo', async (req, res) => {
    try {
        const skill = await Question.findById(req.params.id)
  
        if (!skill || !skill.question_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.question_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
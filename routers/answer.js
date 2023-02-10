const express = require('express')
const auth = require('../middleware/auth')
const Answer = require('../models/answer')
const router = new express.Router()
const multer = require('multer')
const {
  createAnswer,
  getAnswers,
  getAnswersByQue,
  deleteAnswer,
  

} = require('../controllers/Answer')

router.post('/new/:id',[auth.verifyjwt], createAnswer)
router.get('/getAll', getAnswers)
router.get('/getAnsByQue/:id', getAnswersByQue)
// router.delete('/delete',[auth.verifyjwt, auth.userTypeFarmer], deleteAnswer)


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
  router.post('/:id/answer_logo',[auth.verifyjwt], upload.single('answer_logo'), async (req, res) => {
    const answer = await Answer.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/answer_logo`
    
    
    answer.answer_logo = req.file.buffer
    answer.answer_logo_url = link
    await answer.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/answer_logo',[auth.verifyjwt], async (req, res) => {
    const skill = await Answer.findById(req.params.id)
    skill.answer_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/answer_logo', async (req, res) => {
    try {
        const skill = await Answer.findById(req.params.id)
  
        if (!skill || !skill.answer_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.answer_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
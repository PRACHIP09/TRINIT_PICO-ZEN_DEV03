const express = require('express')
const auth = require('../middleware/auth')
const Progress = require('../models/progress')
const router = new express.Router()
const multer = require('multer')
const {
  createProgress,
  getProgress,
  deleteProgress,
  

} = require('../controllers/Progress')

router.post('/new',[auth.verifyjwt], createProgress)
router.get('/getAll',[auth.verifyjwt], getProgress)
router.delete('/delete',[auth.verifyjwt,], deleteProgress)


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
  router.post('/:id/progress_logo',[auth.verifyjwt], upload.single('progress_logo'), async (req, res) => {
    const progress = await Progress.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/progress_logo`
    
    
    progress.progress_logo = req.file.buffer
    progress.progress_logo_url = link
    await progress.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/progress_logo',[auth.verifyjwt], async (req, res) => {
    const skill = await Progress.findById(req.params.id)
    skill.progress_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/progress_logo', async (req, res) => {
    try {
        const skill = await Progress.findById(req.params.id)
  
        if (!skill || !skill.progress_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.progress_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
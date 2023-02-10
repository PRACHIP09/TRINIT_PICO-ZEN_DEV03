const express = require('express')
const auth = require('../middleware/auth')
const Inno = require('../models/inno')
const router = new express.Router()
const multer = require('multer')
const {
  createInno,
  getInno,
  deleteInno,
  

} = require('../controllers/Inno')

router.post('/new',[auth.verifyjwt], createInno)
router.get('/getAll',[auth.verifyjwt], getInno)
router.delete('/delete',[auth.verifyjwt,], deleteInno)


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
  router.post('/:id/inno_logo',[auth.verifyjwt], upload.single('inno_logo'), async (req, res) => {
    const inno = await Inno.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/inno_logo`
    
    
    inno.inno_logo = req.file.buffer
    inno.inno_logo_url = link
    await inno.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/inno_logo',[auth.verifyjwt], async (req, res) => {
    const skill = await Inno.findById(req.params.id)
    skill.inno_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/inno_logo', async (req, res) => {
    try {
        const skill = await Inno.findById(req.params.id)
  
        if (!skill || !skill.inno_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.inno_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
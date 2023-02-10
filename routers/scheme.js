const express = require('express')
const auth = require('../middleware/auth')
const Scheme = require('../models/scheme')
const router = new express.Router()
const multer = require('multer')
const {
  createScheme,
  getSchemes,
  deleteScheme,
  

} = require('../controllers/scheme')

router.post('/new',[auth.verifyjwt,auth.userTypeGovernment], createScheme)
router.get('/getAll',[auth.verifyjwt], getSchemes)
router.delete('/delete',[auth.verifyjwt, auth.userTypeGovernment], deleteScheme)


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
  router.post('/:id/skill_logo',[auth.verifyjwt,auth.userTypeGovernment], upload.single('skill_logo'), async (req, res) => {
    const scheme = await Scheme.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/skill_logo`
    
    
    scheme.skill_logo = req.file.buffer
    scheme.skill_logo_url = link
    await scheme.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/skill_logo',[auth.verifyjwt,auth.userTypeGovernment], async (req, res) => {
    const skill = await Scheme.findById(req.params.id)
    skill.skill_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/skill_logo', async (req, res) => {
    try {
        const skill = await Scheme.findById(req.params.id)
  
        if (!skill || !skill.skill_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.skill_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
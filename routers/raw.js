const express = require('express')
const auth = require('../middleware/auth')
const Raw = require('../models/raw')
const router = new express.Router()
const multer = require('multer')
const {
  createRaw,
  getRaws,
  deleteraw,
  

} = require('../controllers/raw')

router.post('/new',[auth.verifyjwt,auth.userTypeFarmer], createRaw)
router.get('/getAll',[auth.verifyjwt], getRaws)
// router.delete('/delete',[auth.verifyjwt, auth.userTypeFarmer], deleteraw)


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
  router.post('/:id/raw_logo',[auth.verifyjwt,auth.userTypeFarmer], upload.single('raw_logo'), async (req, res) => {
    const raw = await Raw.findById(req.params.id)
    var id = req.params.id
    var link = `api/skill/${id}/raw_logo`
    
    
    raw.raw_logo = req.file.buffer
    raw.raw_logo_url = link
    await raw.save()
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })
  
  router.delete('/:id/raw_logo',[auth.verifyjwt,auth.userTypeFarmer], async (req, res) => {
    const skill = await Raw.findById(req.params.id)
    skill.raw_logo = undefined
    await skill.save()
    res.send()
  })
  
  router.get('/:id/raw_logo', async (req, res) => {
    try {
        const skill = await Raw.findById(req.params.id)
  
        if (!skill || !skill.raw_logo) {
            throw new Error()
        }
  
        res.set('Content-Type', 'image/jpg')
        res.send(skill.raw_logo)
    } catch (e) {
        res.status(404).send()
    }
  })

module.exports = router
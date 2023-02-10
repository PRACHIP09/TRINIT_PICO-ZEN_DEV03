const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const User = require('../models/user')
const {
  createUser,
  loginUser,
  logoutUser,
  viewUser,
  updateUser,
  getUsers,
  deleteUser,

} = require('../controllers/user')

//Create New User 
router.post('/new', createUser)
router.get('/get', [auth.verifyjwt], getUsers)
router.post('/login', loginUser )
router.post('/logout', auth.verifyjwt, logoutUser)
// router.get('/forgotPassword', forgotPassword)
// router.patch('/changePassword',auth.verifyjwt, changePassword)
// router.post('/verifyPassword',auth.verifyjwt, verifyPassword)



//View User
router.get('/viewprofile',auth.verifyjwt, viewUser)


//Update User
router.patch('/update/me',auth.verifyjwt, updateUser)

router.delete('/delete', [auth.verifyjwt], deleteUser)







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
router.post('/me/avatar', auth.verifyjwt, upload.single('avatar'), async (req, res) => {
  var id = req.user._id 
  var link = `api/user/${id}/avatar`
  req.user.avatar = req.file.buffer
  req.user.avatar_url=link
  await req.user.save()
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

router.delete('/me/avatar', auth.verifyjwt, async (req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.send()
})

router.get('/:id/avatar', async (req, res) => {
  try {
      const user = await User.findById(req.params.id)

      if (!user || !user.avatar) {
          throw new Error()
      }

      res.set('Content-Type', 'image/jpg')
      res.send(user.avatar)
  } catch (e) {
      res.status(404).send()
  }
})

module.exports = router
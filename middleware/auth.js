const User = require('../models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

let auth = {
	verifyjwt:  async (req, res, next) => {
		try{
			const token = req.header('Authorization').replace('Bearer ', '')
			const decoded = jwt.verify(token,)
			const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

			if (!user) {
				res.status(401).json({
					message: 'Please Authenticate'
				})
				return
			}

			req.user = user
			req.token = token
			next()
		} catch (error) {
			res.status(400).json({
				message: error.message
			})
		}
	},


	userTypeGovernment: async (req, res, next) => {
		try{
			if (req.user.type === 'GOVERNMENT')  {
				next()
			} else {
				res.status(403).json({
					message: 'Access Denied'
				})
				return
			}
		} catch (error) {
			res.status(400).json({
				message: error.message
			})
		}
	},


	userTypeFarmer: async (req, res, next) => {
		try{
			if (req.user.type === 'FARMER')  {
				next()
			} else {
				res.status(403).json({
					message: 'Access Denied'
				})
				return
			}
		} catch (error) {
			res.status(400).json({
				message: error.message
			})
		}
	},

    userTypeEnthusiasts: async (req, res, next) => {
		try{
			if ( req.user.type === 'ENTHUSIASTS')  {
				next()
			} else {
				res.status(403).json({
					message: 'Access Denied'
				})
				return
			}
		} catch (error) {
			res.status(400).json({
				message: error.message
			})
		}
	},	



	

	
}

module.exports = auth
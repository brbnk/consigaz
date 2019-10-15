const User = require('../models/User')
const jwt = require('jsonwebtoken')

const { jwt_secret } = require('../environment/vars')

module.exports = { 
    login(req, res) { 
        const { user } = req
   
        if (!user) { 
            return res.status(400).json({ message: 'User does not exist!' })
        }

        const { googleID, _id } = user
        const token = jwt.sign({ googleID, _id }, jwt_secret, { expiresIn: '30m' })
        
        res.cookie('jwt', token, { 
            httpOnly: false,
            secure: false
        })
        .status(200)
        .json({ message: 'Succesful Login!' })
    }
}

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

        const io = req.app.get('io')
        const sessionId = req.app.get('sessionId')

        io.in(sessionId).emit('google', { user, token })
        res.end()
    }
}

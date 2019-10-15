const User = require('../models/User')

module.exports = { 
    async register(req, res) { 
        User.create(req.body)
            .then(() => res.status(200).json({ message: 'User created' }))
            .catch(() => res.status(400).json({ message: 'User already exists '}))
    }
}
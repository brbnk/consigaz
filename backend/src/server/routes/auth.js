const passport = require('passport')
const router = require('express').Router()
const AuthController = require('../../controllers/AuthController')

module.exports = app => { 
    router.get('/', 
        (req, res, next) => { 
            app.set('sessionId', req.query.socketId)
            next() 
        },
        passport.authenticate('google', { scope: ['profile', 'email'] }))
        
    router.get('/callback', 
        passport.authenticate('google', { session: false }), 
        AuthController.login
    )

    app.use('/auth/google', router)
}
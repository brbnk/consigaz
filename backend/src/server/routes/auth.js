const passport = require('passport')
const router = require('express').Router()
const AuthController = require('../../controllers/AuthController')

module.exports = app => { 
    router.get('/', 
        passport.authenticate('google', { scope: ['profile', 'email'] }))
        
    router.get('/callback', 
        passport.authenticate('google', { session: false }), 
        AuthController.login
    )

    app.use('/auth/google', router)
}
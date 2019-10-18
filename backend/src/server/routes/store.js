const router = require('express').Router()
const passport = require('passport')
const { show, insert } = require('../../controllers/StoreController')

module.exports = app => { 
    router.get('/show', show)
    router.post('/insert', insert)

    app.use(
        '/stores', 
        passport.authenticate('jwt', { session: false }), 
        router
    )
}
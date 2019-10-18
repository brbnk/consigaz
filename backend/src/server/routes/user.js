const router = require('express').Router()
const { insert, show, remove, update } = require('../../controllers/UserController')
const passport = require('passport')

module.exports = app => { 
    router.post('/insert', insert)    
    router.get('/all', show)
    router.delete('/delete/:_id', remove)
    router.put('/update/:_id', update)


    app.use('/users', passport.authenticate('jwt', { session: false }), router)
}
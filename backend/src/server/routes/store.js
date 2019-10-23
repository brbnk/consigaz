const router = require('express').Router()
const passport = require('passport')
const { 
    show, 
    insert,
    remove,
    update
} = require('../../controllers/StoreController')

module.exports = app => { 
    router.get('/show', show)
    router.post('/insert', insert)
    router.delete('/remove/:_id', remove)
    router.put('/update/:_id', update)

    app.use(
        '/stores', 
        passport.authenticate('jwt', { session: false }), 
        router
    )
}
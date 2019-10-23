const router = require('express').Router()
const passport = require('passport')

const { 
    show, 
    insert, 
    remove, 
    update 
} = require('../../controllers/EmployeeController')

module.exports = app => { 
    router.get('/all', show)
    router.post('/insert', insert)
    router.delete('/remove/:_id', remove)
    router.put('/update/:_id', update)

    app.use(
        '/employees', 
        passport.authenticate('jwt', { session: false }), 
        router
    )
}
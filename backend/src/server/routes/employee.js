const router = require('express').Router()
const passport = require('passport')
const { show, insert } = require('../../controllers/EmployeeController')

module.exports = app => { 
    router.get('/all', show)
    router.post('/insert', insert)

    app.use(
        '/employees', 
        passport.authenticate('jwt', { session: false }), 
        router
    )
}
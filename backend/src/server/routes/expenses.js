const router = require('express').Router()
const passport = require('passport')
const ExpenseController = require('../../controllers/ExpenseController')

module.exports = app => { 
    router.post('/insert', ExpenseController.insert)
    router.get('/all', ExpenseController.show)

    app.use(
        '/expenses', 
        passport.authenticate('jwt', { session: false }),
        router
    )
}
const router = require('express').Router()
const UsersController = require('../../controllers/AuthController')

module.exports = app => { 
    router.route('/register')
        .post(UsersController.register)

    app.use('/auth', router)
}
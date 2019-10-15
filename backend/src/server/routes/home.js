const router = require('express').Router()

module.exports = app => { 
    router.route('/')
        .get((req, res) => res.json({ message: 'hello world!' }))

    app.use('/home', router)
}
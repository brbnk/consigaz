const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')

module.exports = app => { 
    app.use(express.urlencoded({ 
        extended: false 
    }))
    app.use((req, res, next) => { 
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept')
        res.header('Access-Control-Allow-Credentials', true)
        next();
    })
    app.use(cookieParser())
    app.use(cors({ 
        origin: 'http://localhost:8080'
    }))
    app.options('*', cors())
}
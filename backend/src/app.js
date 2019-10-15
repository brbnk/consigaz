const app = require('express')()
const consign = require('consign')

consign({ verbose: true, cwd: 'src' })
    .include('middlewares')
    .then('server')
    .into(app)
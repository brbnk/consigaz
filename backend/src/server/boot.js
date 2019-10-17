const { port, api } = require('../environment/vars')
const logger = require('../helpers/logger')
const socketio = require('socket.io')
const http = require('http')

module.exports = app => { 
    let server = http.createServer(app)
    let io = socketio(server)
    
    app.set('io', io)
    
    server.listen(port, () => { 
        logger(`\nServer: Listenning on ${api}:${port}`, "BG_GREEN")
    })
}
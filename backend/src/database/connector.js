const mongoose = require('mongoose')
const logger = require('../helpers/logger')
const { connection_string } = require('../environment/vars')

module.exports = () => { 
    mongoose.connect(connection_string, { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    mongoose.connection.on('connected', () => { 
        logger(`Database: Default connection is open to ${connection_string}`, 'BG_GREEN')
    })

    mongoose.connection.on('disconnected', () => { 
        logger(`Database: Disconnected`, 'BG_YELLOW')
    })

    mongoose.connection.on('error', () => { 
        logger(`Database: Error`, 'BG_RED')
    })
}
const { port, api } = require('../environment/vars')
const logger = require('../helpers/logger')

module.exports = app => { 
    app.listen(port, () => { 
        logger(`\nServer: Listenning on ${api}:${port}`, "BG_GREEN")
    })
}
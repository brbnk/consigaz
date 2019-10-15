const { port, api } = require('../environment/vars')

module.exports = app => { 
    app.listen(port, () => { 
        console.log(`\nServer is listenning on ${api}:${port}`)
    })
}
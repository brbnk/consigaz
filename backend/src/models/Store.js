const mongoose = require('mongoose')

const StoreSchema = mongoose.Schema({ 
    city: { 
        type: String
    },
    address: { 
        type: String
    },
    tel: { 
        type: String
    }
})

module.exports = mongoose.model('Store', StoreSchema)
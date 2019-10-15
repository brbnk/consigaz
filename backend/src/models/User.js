const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({ 
    googleID: { 
        type: String
    },
    name: { 
        type: String
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    photo: { 
        type: String
    },
    createdAt: { 
        type: Date,
        required: true
    },
    updateAt: { 
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('User', UserSchema)
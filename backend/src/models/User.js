const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({ 
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    photo: { 
        type: String,
        required: false
    }
})

UserSchema.method('create', async (user) => { 
    return await this.model('User').create(user)
})

module.exports = mongoose.model('User', UserSchema)
const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({ 
    name: { 
        type: String,
        required: true
    },
    cellphone: { 
        type: String
    },
    age: { 
        type: Number
    },
    salary: { 
        type: mongoose.Types.Decimal128,
        required: true
    },
    store: { 
        type: mongoose.Types.ObjectId,
        ref: 'Store'
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
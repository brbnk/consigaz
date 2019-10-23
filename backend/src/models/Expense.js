const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({ 
    amount: { 
        type: mongoose.Types.Decimal128,
        required: true
    },
    type: { 
        type: String,
        required: true
    },
    date: { 
        type: Date,
        required: true
    },
    responsible: { 
        type: mongoose.Types.ObjectId,
        ref: 'Employee'
    },
    quantity: { 
        type: Number,
        required: true
    },
    comments: { 
        type: String
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema)
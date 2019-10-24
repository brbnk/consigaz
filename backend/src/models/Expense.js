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
    store: { 
        type: mongoose.Types.ObjectId,
        ref: 'Store'
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
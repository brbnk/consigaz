const Expense = require('../models/Expense')

module.exports = { 
    async show(req, res) { 
        const expenses = await Expense.find().populate('responsible')

        if (!expenses) { 
            return res.status(204).json({ message: 'No Expenses!' })
        }

        res.status(200).json({ expenses })
    },
    async insert(req, res) { 
        const { expenses } = req.body 

        await Expense.insertMany(expenses, (err) => { 
            if (err) { 
                console.log(err)
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: 'Expenses Created!' })
        })
    }
}
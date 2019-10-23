const Employee = require('../models/Employee')

module.exports = { 
    async show(req, res) { 
        const employees = await Employee.find().populate('store')

        if (!employees) { 
            return res.status(204).json({ message: 'No Employees!' })
        }

        res.status(200).json({ employees })
    },
    async insert(req, res) { 
        const employee = req.body
    
        await Employee.create(employee, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: 'Employee Created!' })
        })
    },
    async remove(req, res) { 
        const { _id } = req.params 

        await Employee.deleteOne({ _id }, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: `${_id} employee deleted!` })
        })
    },
    async update(req, res) { 
        const { _id } = req.params
        const {['tableData']:omit, ...changes} = req.body

        await Employee.updateOne({ _id }, changes, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: `${_id} employee updated at ${new Date().toLocaleDateString()}!` })
        })
    }
}
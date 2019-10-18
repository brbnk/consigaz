const User = require('../models/User')

module.exports = { 
    async show(req, res) { 
        await User.find((err, users) => {
            if (err) { 
                return res.status(500).json({ err })
            }

            if (!users) { 
                return res.status(204).json({ message: 'No Users!' })
            }

            res.status(200).json({ users })
        })
    },
    async insert(req, res) {
        const { email } = req.body 
        const createdAt = new Date()
        
        await User.create({ email, createdAt }, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: 'User Created!' })
        })
    },
    async remove(req, res) { 
        const { _id } = req.params

        await User.deleteOne({ _id }, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: `${_id} deleted!` })
        })
    },
    async update(req, res) { 
        const { _id } = req.params
        const {['tableData']: omit, ...changes} = req.body
       
        await User.updateOne({ _id }, changes, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: `${_id} updated at ${new Date().toLocaleDateString()}!` })
        })
    }
}
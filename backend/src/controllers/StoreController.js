const Store = require('../models/Store')

module.exports = { 
    async show(req, res) { 
        await Store.find((err, stores) => {
            if (err) { 
                return res.status(500).json({ err })
            }

            if (!stores) { 
                return res.status(204).json({ message: 'No Stores!' })
            }

            res.status(200).json({ stores })
        })
    },
    async insert(req, res) {
        const store = req.body 
        await Store.create(store, (err) => { 
            if (err) { 
                return res.status(500).json({ err })
            }

            res.status(200).json({ message: 'Store Created!' })
        })
    }
}
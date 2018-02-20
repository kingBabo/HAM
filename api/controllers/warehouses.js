const mongoose = require('mongoose')
const Warehouse = require('../models/warehouse')

exports.getAll = (req, res, next) => {
  Warehouse.find()
    .select('id name city')
    .then(docs => {
      res.status(200).json({
        warehouses: docs.map(doc => {
          return {
            id: doc._id,
            name: doc.name,
            city: doc.city
          }
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
}

exports.createNew = (req, res, next) => {
  const warehouse = new Warehouse({
    id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    city: req.body.city
  })
  warehouse
    .save()
    .then(result => {
      res.status(201).json({
        message: 'A new warehouse was added to the database',
        createdWarehouse: {
          id: result._id,
          name: result.name,
          city: result.city
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
}

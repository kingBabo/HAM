const mongoose = require('mongoose')
const Employee = require('../models/employee')
const Warehouse = require('../models/warehouse')

exports.getAll = (req, res, next) => {
  Employee.find()
    .select('id name warehouse_id')
    .exec()
    .then(docs => {
      res.status(200).json({
        employees: docs.map(doc => {
          return {
            id: doc._id,
            name: doc.name,
            warehouse_id: doc.warehouse_id
          }
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

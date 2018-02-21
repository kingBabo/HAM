const mongoose = require('mongoose')
const Item = require('../models/item')
const ItemTransfer = require('../models/itemTransfer')
const Warehouse = require('../models/warehouse')
const Employee = require('../models/employee')

exports.transfer = (req, res, next) => {
  Employee.find({ id: req.body.employee_id })
    .then(employee => {
      if (!employee)
        return res.status(404).json({ message: 'Employee was not found' })
      return Warehouse.find({ id: req.body.warehouse_id })
    })
    .then(warehouse => {
      if (!warehouse)
        return res.status(404).json({ message: 'Warehouse was not found' })
      return Item.find({ id: req.body.item_id })
    })
    .then(item => {
      if (!item) return res.status(404).json({ message: 'Item was not found' })
      return Item.update(
        { _id: req.body.item_id },
        { warehouse_id: req.body.warehouse_id }
      ).exec()
    })
    .then(result => {
      const itemTransfer = new ItemTransfer({
        id: mongoose.Types.ObjectId(),
        employee_id: req.body.employee_id,
        item_id: req.body.item_id,
        warehouse_id: req.body.warehouse_id
      })
      return itemTransfer.save()
    })
    .then(result => {
      res.status(201).json({
        item_transfer: [
          {
            id: result.id,
            employee_id: result.employee_id,
            item_id: req.body.item_id,
            warehouse_id: req.body.warehouse_id
          }
        ]
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
}

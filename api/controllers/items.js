const mongoose = require('mongoose')
const Item = require('../models/item')
const Warehouse = require('../models/warehouse')

exports.getFromWarehouse = (req, res, next) => {
  Item.find({ warehouse_id: req.params.warehouseId })
    .then(items => {
      if (items.length === 0) {
        return res
          .status(404)
          .json({ message: 'No items found in that warehouse' })
      }
      res.status(200).json({
        count: items.length,
        items: items.map(item => {
          return {
            id: item.id,
            name: item.name,
            warehouse_id: item.warehouse_id
          }
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
}

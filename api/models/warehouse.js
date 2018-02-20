const mongoose = require('mongoose')

const warehouseSchema = mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true }
})

module.exports = mongoose.model('Warehouse', warehouseSchema)

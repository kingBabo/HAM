const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  warehouse_id: { type: mongoose.Schema.Types.ObjectId, required: true }
})

module.exports = mongoose.model('Item', itemSchema)

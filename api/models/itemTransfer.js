const mongoose = require('mongoose')

const itemTransferSchema = mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  warehouse_id: { type: mongoose.Schema.Types.ObjectId, required: true }
})

module.exports = mongoose.model('ItemTransfer', itemTransferSchema)

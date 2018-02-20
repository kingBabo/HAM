const express = require('express')
const router = express.Router()

const Controller = require('../controllers/items')

router.get('/:warehouseId', Controller.getFromWarehouse)

module.exports = router

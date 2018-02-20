const express = require('express')
const router = express.Router()

const Controller = require('../controllers/warehouses')

router.get('/', Controller.getAll)

router.post('/', Controller.createNew)

module.exports = router

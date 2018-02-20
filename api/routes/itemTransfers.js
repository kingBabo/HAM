const express = require('express')
const router = express.Router()

const Controller = require('../controllers/itemTransfers')

router.post('/', Controller.transfer)

module.exports = router

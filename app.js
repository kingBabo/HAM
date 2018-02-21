const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const warhouseRoutes = require('./api/routes/warehouses')
const employeesRoutes = require('./api/routes/employees')
const itemRoutes = require('./api/routes/items')
const itemTransferRoutes = require('./api/routes/itemTransfers')

//Connect to the DB
mongoose.connect(
  'mongodb://HAM-CASE:' +
    process.env.MONGO_ATLAS_PW +
    '@hamcluster-shard-00-00-txxmp.mongodb.net:27017,hamcluster-shard-00-01-txxmp.mongodb.net:27017,hamcluster-shard-00-02-txxmp.mongodb.net:27017/test?ssl=true&replicaSet=HAMCluster-shard-0&authSource=admin'
)

//logger middleware
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
// Allows us to parse json, see controllers req.body..
app.use(bodyParser.json())

// middleware for avoiding CORS-errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

//setup routes
app.use('/warehouses', warhouseRoutes)
app.use('/employees', employeesRoutes)
app.use('/items', itemRoutes)
app.use('/item_transfer', itemTransferRoutes)

//Error handling, not found
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

//Error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app

const mongoose = require('mongoose')
const Warehouse = require('../api/models/warehouse')

//Connect to the DB
exports.seed = new Promise((resolve, reject) => {
  mongoose.connect(
    'mongodb://HAM-CASE:' +
      'HAsdER32' +
      '@hamcluster-shard-00-00-txxmp.mongodb.net:27017,hamcluster-shard-00-01-txxmp.mongodb.net:27017,hamcluster-shard-00-02-txxmp.mongodb.net:27017/test?ssl=true&replicaSet=HAMCluster-shard-0&authSource=admin'
  )

  const warehouses = [
    new Warehouse({
      name: 'Lager A',
      city: 'Malmö'
    }),
    new Warehouse({
      name: 'Lager B',
      city: 'Oslo'
    }),
    new Warehouse({
      name: 'Lager C',
      city: 'Köpenhamn'
    })
  ]

  done = 0
  for (let i = 0; i < warehouses.length; i++) {
    warehouses[i]
      .save()
      .then(res => {
        done++
        if (done === warehouses.length) {
          ;() => mongoose.disconnect()
          resolve(true)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  }
})

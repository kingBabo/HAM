const Item = require('../api/models/item')
const Warehouse = require('../api/models/warehouse')
const mongoose = require('mongoose')

exports.seed = () => {
  mongoose.connect(
    'mongodb://HAM-CASE:' +
      'HAsdER32' +
      '@hamcluster-shard-00-00-txxmp.mongodb.net:27017,hamcluster-shard-00-01-txxmp.mongodb.net:27017,hamcluster-shard-00-02-txxmp.mongodb.net:27017/test?ssl=true&replicaSet=HAMCluster-shard-0&authSource=admin'
  )
  Warehouse.find()
    .select('id city')
    .exec()
    .then(warehouses => {
      const malmo = warehouses.filter(warehouse => warehouse.city === 'Malmö')
      const oslo = warehouses.filter(warehouse => warehouse.city === 'Oslo')
      const kopenhamn = warehouses.filter(
        warehouse => warehouse.city === 'Köpenhamn'
      )
      const items = [
        new Item({
          name: 'Hammare',
          warehouse_id: kopenhamn[0]._id
        }),
        new Item({
          name: 'Borr',
          warehouse_id: malmo[0]._id
        }),
        new Item({
          name: 'Stege',
          warehouse_id: oslo[0]._id
        })
      ]
      done = 0
      for (let i = 0; i < items.length; i++) {
        items[i].save((err, result) => {
          done++
          if (done === items.length) mongoose.disconnect()
        })
      }
    })
    .catch(err => console.log(err))
}

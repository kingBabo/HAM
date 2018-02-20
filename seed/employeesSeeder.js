const Employee = require('../api/models/employee')
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
      const employees = [
        new Employee({
          name: 'Hjulia Styrén',
          warehouse_id: malmo[0]._id
        }),
        new Employee({
          name: 'Antonia Cylinder',
          warehouse_id: oslo[0]._id
        }),
        new Employee({
          name: 'Kalle Bromslöf',
          warehouse_id: malmo[0]._id
        }),
        new Employee({
          name: 'Johan Sportratt',
          warehouse_id: kopenhamn[0]._id
        })
      ]
      done = 0
      for (let i = 0; i < employees.length; i++) {
        employees[i].save((err, result) => {
          done++
          if (done === employees.length) () => mongoose.disconnect()
        })
      }
    })
    .catch(err => console.log(err))
}

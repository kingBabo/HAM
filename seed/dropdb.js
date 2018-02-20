const mongoose = require('mongoose')

const db = mongoose.createConnection(
  'mongodb://HAM-CASE:' +
    'HAsdER32' +
    '@hamcluster-shard-00-00-txxmp.mongodb.net:27017,hamcluster-shard-00-01-txxmp.mongodb.net:27017,hamcluster-shard-00-02-txxmp.mongodb.net:27017/test?ssl=true&replicaSet=HAMCluster-shard-0&authSource=admin'
)

db.dropDatabase((err, result) => {
  if (!err)
    console.log('Your database was succesfully deleted, please press CTRL+C')
  else console.log(err)
})

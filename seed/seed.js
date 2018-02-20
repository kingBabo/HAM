const warehousesSeeder = require('./warehousesSeeder')
const employeesSeeder = require('./employeesSeeder')
const itemsSeeder = require('./itemsSeeder')
const mongoose = require('mongoose')

//seed
warehousesSeeder.seed
  .then(res => {
    employeesSeeder.seed()
    itemsSeeder.seed()
  })
  .then(res => {
    console.log('Done seeding database')
  })
  .catch(err => console.log(err))

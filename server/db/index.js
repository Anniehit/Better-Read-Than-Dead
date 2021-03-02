const db = require('./db')

// register models
const {Admin, User, Product, Tag} = require('./models')

module.exports = {db, Admin, User, Product, Tag}

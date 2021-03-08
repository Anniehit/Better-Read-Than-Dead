const db = require('./db')

// register models
const {User, Product, Tag} = require('./models')

module.exports = {db, User, Product, Tag}

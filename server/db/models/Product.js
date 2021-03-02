const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define(
  'product',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    year : {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    printing: {
        type: Sequelize.STRING,
    },
    edition: {
        type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0.01
      }
    },
    imageUrl: {
      type: Sequelize.TEXT,
      defaultValue: 'https://art.pixilart.com/3b9d8873b4b4abc.png'
    },
  })

module.exports = Product

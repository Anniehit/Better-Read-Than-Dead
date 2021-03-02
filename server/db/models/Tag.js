const Sequelize = require('sequelize')
const db = require('../db')

const Tag = db.define(
    'tag',
    {
        tagName: Sequelize.STRING
    }
)
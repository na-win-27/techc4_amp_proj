const sequelize = require('sequelize')
const db = require('../database/connection')

const schema = {
  foodCategoryID: {
    type: sequelize.UUID,
    primaryKey: true
  },
  foodCategory: {
    type: sequelize.STRING(255),
    allowNull: false
  }
}

const options = {
  timestamps: true
}

const FoodCategory = db.define('FoodCategory', schema, options)

module.exports = FoodCategory

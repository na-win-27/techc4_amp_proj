const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')
const db = require('../database/connection')

const schema = {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull:false,
  },
  userID: {
    type: sequelize.UUID,
    primaryKey: true
  },
  password: {
    type: sequelize.STRING(255),
    allowNull: false
  },
  name: {
    type: sequelize.STRING(255),
    allowNull: false
  },
  contact: {
    type: sequelize.STRING(255),
    allowNull: false
  },
  email: {
    type: sequelize.STRING(255),
    allowNull: false
  }
}

const options = {
  timestamps: true
}

const User = db.define('User', schema, options)

module.exports = User

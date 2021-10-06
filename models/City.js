const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  cityID:{
    type:sequelize.UUID,
    primaryKey:true,
  },
  cityName:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  stateName: {
    type:sequelize.STRING(255),
    allowNull:false,
  }
}

const options = {
  timestamps: true
}

const City = db.define('City',schema,options);

module.exports = City;













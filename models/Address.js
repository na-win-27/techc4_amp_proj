const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  addressID:{
    type:sequelize.UUID,
    primarykey:true,
  },
  street:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  currentAddress: {
    type:sequelize.STRING(255),
    allowNull:false,
  },
  zipcode: {
    type:sequelize.INTEGER,
    allowNull:false,
  }
}

const options = {
  timestamps: true
}

const Address=db.define('Address',schema,options);

module.exports = Address;


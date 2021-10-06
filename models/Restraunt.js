const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  restrauntID:{
    type:sequelize.UUID,
    primarykey:true,
  },
  zipcode:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  address: {
    type:sequelize.STRING(255),
    allowNull:false,
  },
  rating: {
    type:sequelize.INTEGER,
    allowNull:false,
  }
}

const options = {
  timestamps: true
}

const Restraunt=db.define('Restraunt',schema,options);

module.exports = Restraunt;








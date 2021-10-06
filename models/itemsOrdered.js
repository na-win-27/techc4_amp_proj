const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  itemsOrderedID:{
    type:sequelize.UUID,
    primarykey:true,
  },
  price:{
    type:sequelize.INTEGER,
    allowNull:false,
  },
  quantity: {
    type:sequelize.INTEGER,
    allowNull:false,
  }
}

const options = {
  timestamps: true
}

const ItemsOrdered=db.define('ItemsOrdered',schema,options);

module.exports = ItemsOrdered;









const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  orderID:{
    type:sequelize.UUID,
    primarykey:true,
  },
  orderStatus:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  orderTime: {
    type:sequelize.TIME,
    allowNull:false,
  },
  deliveryTime: {
    type:sequelize.TIME,
    allowNull:false,
  },
  totalPrice: {
      type:sequelize.INTEGER,
      allowNull:false,
  }
}

const options = {
  timestamps: true
}

const Order=db.define('Order',schema,options);

module.exports = Order;









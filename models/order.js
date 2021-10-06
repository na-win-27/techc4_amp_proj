const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  orderID:{
    type:sequelize.UUID,
    primaryKey:true,
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
  },
  userID: {
    type: sequelize.UUID,
    allowNull: true,
    references: {
      model: "Users",
      key: "userID",
    },
  },
  restrauntID: {
    type: sequelize.UUID,
    allowNull: true,
    references: {
      model: "Restraunts",
      key: "restrauntID",
    },
  },
  // itemsOrderedID: {
  //   type: sequelize.UUID,
  //   allowNull: true,
  //   references: {
  //     model: "ItemsOrdereds",
  //     key: "itemsOrderedID",
  //   },
  // },
  addressID: {
    type: sequelize.UUID,
    allowNull: true,
    references: {
      model: "Addresses",
      key: "addressID",
    },
  },
}

const options = {
  timestamps: true
}

const Order=db.define('Order',schema,options);

module.exports = Order;









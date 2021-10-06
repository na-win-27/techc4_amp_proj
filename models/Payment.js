const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  paymentID:{
    type:sequelize.UUID,
    primaryKey:true,
  },
  paymentStatus:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  amountToBePayed: {
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
  orderID: {
    type: sequelize.UUID,
    allowNull: true,
    references: {
      model: "Orders",
      key: "orderID",
    },
  },
}

const options = {
  timestamps: true
}

const Payment=db.define('Payment',schema,options);

module.exports = Payment;




const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  paymentID:{
    type:sequelize.UUID,
    primarykey:true,
  },
  paymentStatus:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  amountToBePayed: {
    type:sequelize.INTEGER,
    allowNull:false,
  },
}

const options = {
  timestamps: true
}

const Payment=db.define('Payment',schema,options);

module.exports = Payment;




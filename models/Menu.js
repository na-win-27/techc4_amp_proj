const sequelize= require('sequelize');
const db= require('../database/connection');

const schema={
  menuID:{
    type:sequelize.UUID,
    primarykey:true,
  },
   description:{
    type:sequelize.STRING(255),
    allowNull:false,
  },
  price: {
    type:sequelize.INTEGER,
    allowNull:false,
  },
}

const options = {
  timestamps: true
}

const Menu=db.define('Menu',schema,options);

module.exports = Menu;






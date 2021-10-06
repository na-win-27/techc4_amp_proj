module.exports = (sequelize, type) => {
  return sequelize.define('User', {
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false
   
  }
  
})};

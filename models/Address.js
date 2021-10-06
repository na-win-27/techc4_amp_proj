module.exports = (sequelize, type) => {
  return sequelize.define('User', {
  Steet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CurrentAddress: {
    type: DataTypes.STRING,
    allowNull: false
   
  },
  zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
  
})}



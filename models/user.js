module.exports = (sequelize, type) => {
  return sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contact: {
    type: DataTypes.STRING,
    allowNull: false
   
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false
  }
  
})};
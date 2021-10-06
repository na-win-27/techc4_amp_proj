module.exports = (sequelize, type) => {
  return sequelize.define('User', {
  CityName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  StateName: {
    type: DataTypes.STRING,
    allowNull: false
   
  }
  
})}





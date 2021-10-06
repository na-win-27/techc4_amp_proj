module.exports = (sequelize, type) => {
    return sequelize.define('User', {
 OrderStatus:{
     type: DataTypes.String,
 },
 OrderTime:{
     type: DataTypes.Timestamp,
     allowNull: false,
 },
 DeliveryTime:{
     type: DataTypes.Timestamp,
     allowNull: false,
 },
 TotalPrice: {
     type:DataTypes.String
 }
  
})};



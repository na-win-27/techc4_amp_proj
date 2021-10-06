module.exports = (sequelize, type) => {
    return sequelize.define('User', {
 Adress:{
     type: DataTypes.STRING,
 },
 Rating:{
     type: DataTypes.INTEGER,
     allowNull: false,
 },
 Zipcode:{
     type: DataTypes.STRING,
     allowNull: false,
 } 
})};

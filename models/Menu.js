module.exports = (sequelize, type) => {
    return sequelize.define('User', {
 Description:{
     type: DataTypes.STRING,
 },
 Price:{
     type: DataTypes.INTEGER,
     allowNull: false,
 }
})};

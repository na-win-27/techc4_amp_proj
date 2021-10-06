module.exports = (sequelize, type) => {
  return sequelize.define('User', {
  AmountToBePaid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PaymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
})};

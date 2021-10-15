const migrations = async () => {
  try {
    const userModel = require('./user')
    const addressModel = require('./Address')
    const cityModel = require('./City')
    const orderModel = require('./order')
    const restrauntModel = require('./Restraunt')
    const itemsOrderModel = require('./itemsOrdered')
    const menuModel = require('./Menu')
    const foodCategoryModel = require('./FoodCategory')
    const paymentModel = require('./Payment')
    const {writeFileSync} = require('fs');
    const sequelizeErd = require('sequelize-erd');
    const db = require('../database/connection')


    paymentModel.belongsTo(userModel, { foreignKey: 'userID' })
    orderModel.belongsTo(userModel, { foreignKey: 'userID' })
    addressModel.belongsTo(userModel, { foreignKey: 'userID' })
    addressModel.belongsTo(orderModel, { foreignKey: 'addressID'})
    paymentModel.belongsTo(orderModel, { foreignKey: 'orderID' })
    orderModel.belongsTo(restrauntModel, { foreignKey: 'restrauntID' })
    menuModel.belongsTo(restrauntModel, { foreignKey: 'restrauntID' })
    itemsOrderModel.belongsTo(orderModel, { foreignKey: 'orderID' })
    foodCategoryModel.belongsTo(menuModel, { foreignKey: 'menuID' })
    cityModel.belongsTo(addressModel, { foreignKey: 'cityID' })
    restrauntModel.belongsTo(cityModel, { foreignKey: 'cityID' })

    await userModel.sync({ alter: true })
    await cityModel.sync({ alter: true })
    await addressModel.sync({ alter: true })
    await restrauntModel.sync({ alter: true })
    await orderModel.sync({ alter: true })
    await menuModel.sync({ alter: true })
    await foodCategoryModel.sync({ alter: true })
    await paymentModel.sync({ alter: true })
  
    await itemsOrderModel.sync({ alter: true })
 


    const svg = await sequelizeErd({ source: db }); 
  writeFileSync('./erd.svg', svg);
  } catch (e) {
    console.error(e)
  }
}

module.exports = migrations

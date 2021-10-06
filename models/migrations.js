migrations=async()=>{
  try{
const userModel = require('./user');
const addressModel = require('./Address');
const cityModel = require('./City');
const orderModel = require('./order');
const restrauntModel = require('./Restraunt');
const itemsOrderModel = require('./itemsOrdered');
const menuModel = require('./Menu');
const foodCategoryModel = require('./FoodCategory');
const paymentModel = require('./Payment');

paymentModel.belongsTo(userModel,{foreignKey:'userID'});
orderModel.belongsTo(userModel,{foreignKey:'userID'})
addressModel.belongsTo(userModel,{foreignKey:'userID'})
paymentModel.belongsTo(orderModel,{foreignKey:'orderID'})
orderModel.belongsTo(restrauntModel,{foreignKey:'restrauntID'});
addressModel.belongsTo(orderModel)
menuModel.belongsTo(restrauntModel,{foreignKey:'restrauntID'})
itemsOrderModel.belongsTo(menuModel,{foreignKey:'menuID'})
foodCategoryModel.belongsTo(restrauntModel,{foreignKey:'restrauntID'})
cityModel.belongsTo(addressModel,{foreignKey:'cityID'})
foodCategoryModel.hasMany(menuModel,{foreignKey:'foodCategoryID'})
restrauntModel.belongsTo(cityModel,{foreignKey:'cityID'})


await userModel.sync({alter:true});
await addressModel.sync({alter:true});
await cityModel.sync({alter:true});
await orderModel.sync({alter:true});
await foodCategoryModel.sync({alter:true});
await paymentModel.sync({alter:true});
await restrauntModel.sync({alter:true});
await itemsOrderModel.sync({alter:true});
await menuModel.sync({alter:true});



}
catch(e){
   console.error(e)
}
}

module.exports= migrations

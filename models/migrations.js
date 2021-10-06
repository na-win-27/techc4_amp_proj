migrations=async()=>{
  try{
const userModel = require('./user');
const adressModel = require('./Address');
const cityModel = require('./City');
const orderModel = require('./order');
const restrauntModel = require('./Restraunt');
const itemsOrderModel = require('./itemsOrdered');
const menuModel = require('./Menu');
const foodCategoryModel = require('./FoodCategory');
const paymentModel = require('./Payment');

await userModel.sync({alter:true});
await adressModel.sync({alter:true});
await cityModel.sync({alter:true});
await orderModel.sync({alter:true});
await foodCategoryModel.sync({alter:true});
await paymentModel.sync({alter:true});
await restrauntModel.sync({alter});
await itemsOrderModel.sync({alter:true});
await restrauntModel.sync({alter:true});
await itemsOrderModel.sync({alter:true})
await menuModel.sync({alter:true});
}catch(e){
  throw new Error(e.message);
}
}

module.exports= migrations

const Sequelize = require('sequelize');
const userModel = require('./models/user');
const adressModel = require('./models/Address');
const cityModel = require('./models/City');
const orderModel = require('./models/order');
const restrauntModel = require('./models/Restraunt');
const itemsOrderModel = require('./models/itemsOrdered');
const menuModel = require('./models/Menu');
const foodCategoryModel = require('./models/FoodCategory');
const paymentModel = require('./models/Payment');


const sequelize = new Sequelize('orm', 'psql', 'navin27', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })

  const User = userModel(sequelize, Sequelize);
  const Address=adressModel(sequelize,Sequelize);
  const City=cityModel(sequelize,Sequelize);
  const Order=orderModel(sequelize,Sequelize);
  const Restraunt=restrauntModel(sequelize,Sequelize);
  const ItemsOrdered=itemsOrderModel(sequelize,Sequelize);
  const Menu=menuModel(sequelize,Sequelize);
  const FoodCategory=foodCategoryModel(sequelize,Sequelize);
  const Payment=paymentModel(sequelize,Sequelize);

  Order.belongsTo(User);
  Payment.belongsTo(User);
  Payment.belongsTo(Order);
  Address.belongsTo(User);
  Order.belongsTo(Restraunt);
  Order.hasOne(ItemsOrdered);
  Order.hasOne(Address);
  City.hasMany(Restraunt);
  

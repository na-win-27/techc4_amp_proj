const sequelize = require("sequelize");
const db = require("../database/connection");

const schema = {
  itemsOrderedID: {
    type: sequelize.UUID,
    primaryKey: true,
  },
  // orderID: {
  //   type: sequelize.UUID,
  //   allowNull: true,
  //   references: {
  //     model: "Orders",
  //     key: "orderID",
  //   },
  // },
  menuID: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: "Menus",
      key: "menuID",
    },
  },
  price: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
};

const options = {
  timestamps: true,
};

const ItemsOrdered = db.define("ItemsOrdered", schema, options);

module.exports = ItemsOrdered;

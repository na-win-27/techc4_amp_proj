const sequelize = require("sequelize");
const db = require("../database/connection");

const schema = {
  menuID: {
    type: sequelize.UUID,
    primaryKey: true,
  },
  description: {
    type: sequelize.STRING(255),
    allowNull: true,
  },
  // foodCategoryID: {
  //   type: sequelize.UUID,
  //   allowNull: true,
  //   references: {
  //     model: "FoodCategories",
  //     key: "foodCategoryID",
  //   },
  // },
  restrauntID: {
    type: sequelize.UUID,
    allowNull: true,
    references: {
      model: "Restraunts",
      key: "restrauntID",
    },
  },
  price: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
};

const options = {
  timestamps: true,
};

const Menu = db.define("Menu", schema, options);

module.exports = Menu;

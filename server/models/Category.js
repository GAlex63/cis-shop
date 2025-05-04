const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
});

module.exports = Category;

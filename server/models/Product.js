const { DataTypes, Sequelize } = require("sequelize");
const validator = require("validator");
const sequelize = require("../db");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    img_url: {
      type: DataTypes.STRING,
      validate: {
        isValidUrl(value) {
          if (!validator.isURL(value)) {
            throw new Error("Image should be a valid URL");
          }
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;

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
          const isValid = validator.isURL(value, {
            require_protocol: true,
            host_whitelist: ["localhost"],
          });
          if (!isValid) {
            throw new Error("Изображение имеет некорректный URL");
          }
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories",
        key: "id",
      },
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;

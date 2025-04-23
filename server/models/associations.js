const User = require("./User");
const Order = require("./Order");
const Cart = require("./Cart");
const Product = require("./Product");

function setupAssociations() {
  User.hasMany(Order, { foreignKey: "user_id", as: "orders" });
  Order.belongsTo(User, { foreignKey: "user_id" });

  Cart.belongsToMany(Product, {
    through: "CartProducts",
    foreignKey: "cart_id",
    as: "cartProducts",
  });
  Product.belongsToMany(Cart, {
    through: "CartProducts",
    foreignKey: "product_id",
    as: "productCart",
  });

  Cart.belongsTo(Product, { foreignKey: "product_id", as: "product" });
  Product.hasMany(Cart, { foreignKey: "product_id", as: "carts" });
}

module.exports = setupAssociations;

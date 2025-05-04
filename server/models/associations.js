const User = require("./User");
const Order = require("./Order");
const Cart = require("./Cart");
const Product = require("./Product");
const Category = require("./Category");

function setupAssociations() {
  User.hasMany(Order, { foreignKey: "user_id", as: "orders" });
  Order.belongsTo(User, { foreignKey: "user_id" });

  Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });
  Category.hasMany(Product, { foreignKey: "category_id", as: "products" });

  Cart.belongsToMany(Product, {
    through: "CartProducts",
    foreignKey: "cart_id",
    as: "cartProducts",
  });
  Product.belongsToMany(Cart, {
    through: "CartProducts",
    foreignKey: "product_id",
    as: "productCarts",
  });
}

module.exports = setupAssociations;

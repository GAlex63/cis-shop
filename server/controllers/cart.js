const Cart = require("../models/Cart");
const Product = require("../models/Product");

async function addCart(req, res) {
  const { productId, count } = req.body;
  if (!productId || !count) {
    return res
      .status(400)
      .send({ error: "id продукта или количество не переданы." });
  }
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    return res.status(404).send({ error: "Продукт не найден." });
  }

  const userId = req.user.id;

  const existingCartItem = await Cart.findOne({
    where: { user_id: userId, product_id: productId },
  });

  if (existingCartItem) {
    existingCartItem.count += count;
    await existingCartItem.save();
    return existingCartItem;
  } else {
    const newCartItem = await Cart.create({
      user_id: userId,
      product_id: productId,
      img_url: product.img_url,
      price: product.price,
      title: product.title,
      count: count,
    });

    return newCartItem;
  }
}

async function deleteAllCart(userId) {
  const deletedCount = await Cart.destroy({
    where: {
      user_id: userId,
    },
  });

  return deletedCount > 0;
}

async function deleteCart(userId, productId) {
  try {
    const deletedCount = await Cart.destroy({
      where: {
        product_id: productId,
        user_id: userId,
      },
    });
    if (deletedCount > 0) {
      const product = await Cart.findOne({
        where: { id: productId, user_id: userId },
      });

      if (product && product.cart_count > 0) {
        await Cart.decrement("cart_count", { where: { id: productId } });
      }
    }
    return deletedCount > 0;
  } catch (error) {
    console.error("Ошибка при удалении товара из корзины:", error);
    throw error;
  }
}
async function getCarts(userId) {
  const cart = await Cart.findAll({
    where: { user_id: userId },
    include: [
      {
        model: Product,
        as: "product",
        attributes: ["id", "title", "price", "img_url"],
      },
    ],
  });
  return cart;
}

module.exports = {
  addCart,
  deleteAllCart,
  deleteCart,
  getCarts,
};

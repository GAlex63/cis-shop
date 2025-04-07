const Cart = require("../models/Cart");
const Order = require("../models/Order");

function addOrder(orderData) {
  return Order.create({
    first_name: orderData.first_name,
    last_name: orderData.last_name,
    phone: orderData.phone,
    email: orderData.email,
    total_amount: orderData.totalAmount,
    user_id: userId,
  });
}
async function addOrder(userId, orderData) {
  const newOrder = await Order.create({
    first_name: orderData.first_name,
    last_name: orderData.last_name,
    phone: orderData.phone,
    email: orderData.email,
    total_amount: orderData.total_amount,
    user_id: userId,
  });
  const userCarts = await Cart.findAll({
    where: { user_id: userId, order_id: null },
  });

  for (let cartItem of userCarts) {
    cartItem.order_id = newOrder.id;
    await cartItem.save();
  }

  return newOrder;
}

async function deleteOrder(id) {
  await Order.destroy({ where: { id } });
}

function getOrders() {
  return Order.findAll();
}

async function getOrder(req, res) {
  const { user_id } = req.params;

  const order = await Order.findAll({
    where: { user_id },
    attributes: {
      include: ["first_name", "last_name", "phone", "email", "total_amount"],
    },
    include: [
      {
        model: Product,
      },
    ],
  });

  res.status(200).json({ message: "Список товаров в заказе получен", order });
}

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  deleteOrder,
};

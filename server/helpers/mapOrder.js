module.exports = function (order) {
  return {
    id: order.id,
    firstName: order.first_name,
    lastName: order.last_name,
    phone: order.phone,
    email: order.email,
    totalAmount: order.total_amount,
    userId: order.userId,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  };
};

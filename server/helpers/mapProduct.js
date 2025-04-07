module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    imgUrl: product.img_url,
    category: product.category,
    price: product.price,
    createdAt: product.created_at,
    publishedAt: product.createdAt,
  };
};

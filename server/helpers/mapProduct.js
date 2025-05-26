module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    imgUrl: product.img_url,
    category_id: product.category?.id,
    category_name: product.category?.name,
    price: product.price,
    description: product.description,
    createdAt: product.created_at,
  };
};

const { Op } = require("sequelize");
const sequelize = require("../db");
const Product = require("../models/Product");
const Category = require("../models/Category");

async function addProduct(product) {
  try {
    const newProduct = await Product.create({
      img_url: product.img_url,
      category_id: product.category_id,
      title: product.title,
      price: product.price,
      description: product.description || "",
    });

    return newProduct;
  } catch (error) {
    throw new Error("Не удалось добавить продукт" + error.message);
  }
}

async function editProduct(productId, productData) {
  const transaction = await sequelize.transaction();
  try {
    const existingProduct = await Product.findByPk(productId);
    if (!existingProduct) {
      throw new Error("Продукт с таким id не найден");
    }

    const [updatedCount, updatedProduct] = await Product.update(productData, {
      where: { id: productId },
      returning: true,
      transaction,
    });

    if (updatedCount === 0) {
      throw new Error("Продукт не найден или не был обновлён");
    }
    await transaction.commit();
    return updatedProduct[0];
  } catch (error) {
    await transaction.rollback();
    console.error("Error during transaction:", error);
    throw error;
  }
}

async function deleteProduct(id) {
  const deletedCount = await Product.destroy({ where: { id } });
  return deletedCount > 0;
}

async function getProducts(search = "", limit = 10, page = 1) {
  const offset = (page - 1) * limit;

  try {
    const { count, rows: products } = await Product.findAndCountAll({
      where: {
        title: {
          [Op.like]: `%${search}%`,
        },
      },
      limit: limit,
      offset: offset,
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });

    return {
      products,
      lastPage: Math.ceil(count / limit),
    };
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    throw new Error("Ошибка при получении продуктов");
  }
}

async function getProduct(id) {
  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          as: "category",
          attribute: ["id", "name"],
        },
      ],
    });

    if (!product) {
      return null;
    }
    return product;
  } catch (error) {
    console.error("Ошибка при получении продукта:", error);
    throw new Error("Ошибка при получении продукта из базы данных");
  }
}

module.exports = {
  addProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getProducts,
};

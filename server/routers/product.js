const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product");

const hasRole = require("../middleware/hasRole");
const authenticated = require("../middleware/authenticated");
const ROLES = require("../constants/role");
const mapProduct = require("../helpers/mapProduct");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search, limit, page } = req.query;
    const { products, lastPage } = await getProducts(search, limit, page);
    res.send({ data: { lastPage, products: products.map(mapProduct) } });
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    res.status(500).send({ error: "Не удалось получить товары" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await getProduct(req.params.id);
    if (!product) {
      return res.status(404).send({ error: "Товар не найден" });
    }
    res.send({ data: mapProduct(product) });
  } catch (error) {
    res.status(500).send({ error: "Ошибка при получении товара" });
  }
});

router.use(authenticated);
router.use(hasRole([ROLES.ADMIN]));

router.post("/", async (req, res) => {
  try {
    const product = req.body.product;
    if (!product) {
      throw new Error("Поле product не передано");
    }
    const newProduct = await addProduct(product);
    res.status(201).send({ error: null, product: newProduct });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await editProduct(productId, req.body);
    if (!updatedProduct) {
      return res.status(404).send({ error: "Продукт не найден" });
    }
    res.send({ message: "Продукт успешно обновлён", product: updatedProduct });
  } catch (error) {
    res.status(500).send({ error: error.message || "Ошибка при обновлении" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.send({ message: "Товар удален", error: null });
  } catch (error) {
    console.error("Ошибка при удалении продукта:", error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const {
  addCart,
  deleteAllCart,
  deleteCart,
  getCarts,
} = require("../controllers/cart");

const authenticated = require("../middleware/authenticated");

const router = express.Router();

router.use(authenticated);

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.query;
    const cart = await getCarts(userId, productId);
    res.status(200).send({ error: null, cart });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { productId, count } = req.body;
    if (!productId || !count) {
      return res
        .status(400)
        .send({ error: "Product ID and count are required." });
    }
    const cartItem = await addCart(req, res);
    res.status(201).send({ error: null, cartItem });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const success = await deleteAllCart(userId);

    if (success) {
      res.send({ message: "Все товары удалены из корзины." });
    } else {
      res.status(404).send({ error: "Корзина уже пуста." });
    }
  } catch (error) {
    res.status(500).send({ error: error.message || "Неизвестная ошибка." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;
    const deletedCart = await deleteCart(userId, productId);

    if (deletedCart) {
      res.send({ message: "Товар удален из корзины", error: null });
    } else {
      res.status(404).send({ error: "Товар не найден в корзине" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message || "Неизвестная ошибка" });
  }
});

module.exports = router;

const express = require("express");
const { addOrder, getOrders, deleteOrder } = require("../controllers/order");
const hasRole = require("../middleware/hasRole");
const authenticated = require("../middleware/authenticated");
const ROLES = require("../constants/role");
const mapOrders = require("../helpers/mapOrder");

const router = express.Router();

router.use(authenticated);

router.post("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = req.body;
    const newOrder = await addOrder(userId, orderData);
    res.status(201).send({ error: null, order: newOrder });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});

router.get("/", hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    const orders = await getOrders();
    res.send({ orders: orders.map(mapOrders) });
  } catch (error) {
    res
      .status(500)
      .send({ error: error.message || "Ошибка получения заказов" });
  }
});

router.delete("/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    await deleteOrder(req.params.id);
    res.send({ message: "Заказ удален", error: null });
  } catch (error) {
    res.status(500).send({ error: error.message || "Ошибка удаления заказа" });
  }
});

module.exports = router;

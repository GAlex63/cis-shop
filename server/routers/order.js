const express = require('express')

const authenticated = require("../middleware/authenticated")
const ROLES = require("../constants/role");
const hasRole = require('../middleware/hasRole');
const { addOrder, deleteOrder, getOrders } = require('../controllers/order');
const mapOrder = require("../helpers/mapOrder")
const router = express.Router({ mergeParams: true })

router.post('/orders', authenticated, hasRole([ROLES.USER]), async (req, res) => {
    try {
        const userId = req.user.id
        const orderData = req.body

        const newOrder = await addOrder(userId, orderData)
        res.status(201).send({ error: null, order: newOrder });
    } catch (error) {
        res.status(400).send({ error: error.message || "Неизвестная ошибка" });
    }
});

router.delete('/orders/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteOrder(req.params.id)

    res.send({ message: "Заказ удален", error: null })
})


router.get('/orders', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const orders = await getOrders()

    res.send({ orders: orders.map(mapOrder) })
})


module.exports = router;
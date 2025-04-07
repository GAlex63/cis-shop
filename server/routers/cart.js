const express = require("express")
const { getCart, addCart, deleteAllCart, deleteCart } = require("../controllers/cart")



const router = express.Router({ mergeParams: true })


router.get('/carts', async (req, res) => {
    try {
        const userId = req.user.id

        const { productId } = req.query;
        const cart = await getCart(userId, productId);

        res.status(201).send({ error: null, cart });
    } catch (error) {
        res.status(400).send({ error: error.message || "Неизвестная ошибка" });
    }
})

router.post('/carts', async (req, res) => {
    try {
        const { productId, count } = req.body;
        if (!productId || !count) {
            return res.status(400).send({ error: "Product ID and count are required." });
        }
        const cartItem = await addCart(req, res);

        res.status(201).send({ error: null, cartItem });
    } catch (error) {
        res.status(400).send({ error: error.message || "Неизвестная ошибка" });
    }
});

router.delete('/carts', async (req, res) => {
    try {
        const userId = req.user.id;

        const success = await deleteAllCart(userId);

        if (success) {
            res.status(200).send({ message: "Все товары были удалены из корзины." });
        } else {
            res.status(404).send({ error: "Нет товаров в корзине." });
        }
    } catch (error) {
        res.status(500).send({ error: error.message || "Неизвестная ошибка." });
    }
});

router.delete('/carts/:id', async (req, res) => {
    try {
        const userId = req.user.id;

        const cartId = req.params.id;

        const deletedCart = await deleteCart(userId, favoriteId)
        if (deletedCart) {
            res.send({ message: "Товар удален из корзины", error: null });
        } else {
            res.status(404).send({ error: "Товар не найден в корзине" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message || "Неизвестная ошибка" });
    }

})

module.exports = router;
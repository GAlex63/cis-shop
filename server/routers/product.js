const express = require("express")
const { getProducts, getProduct, addProduct, deleteProduct, editProduct } = require("../controllers/product")
const mapProduct = require("../helpers/mapProduct")
const authenticated = require("../middleware/authenticated")
const ROLES = require("../constants/role")
const hasRole = require("../middleware/hasRole")

const router = express.Router({ mergeParams: true })

router.get('/products', async (req, res) => {
    const { products, lastPage } = await getProducts(
        req.query.search,
        req.query.limit,
        req.query.page,
    )

    res.send({ data: { lastPage, products: products.map(mapProduct) } })
});

router.get('/products/:id', async (req, res) => {
    const product = await getProduct(req.params.id)

    res.send({ data: mapProduct(product) })
})

router.post('/products', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    try {
        const product = req.body.product

        const newProduct = await addProduct(product);

        res.status(201).send({
            error: null,
            product: newProduct
        });
    } catch (error) {
        res.status(400).send({ error: error.message || "Неизвестная ошибка" });
    }
});

router.delete('/products/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteProduct(req.params.id)

    res.send({ message: "Товар удален", error: null })
})

router.patch('/products/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        const updatedProduct = await editProduct(productId, productData);
        if (!updatedProduct) {
            return res.status(404).send({ error: 'Продукт не найден или не удалось обновить данные.' });
        }
        res.status(200).send({
            message: 'Продукт успешно обновлён.',
            product: updatedProduct
        });
    } catch (error) {
        res.status(500).send({ error: error.message || 'Произошла ошибка при обновлении продукта.' });
    }
});

module.exports = router;
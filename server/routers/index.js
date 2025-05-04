const express = require("express");

const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");
const orderRouter = require("./order");
const cartRouter = require("./cart");
const categoryRouter = require("./category");

const router = express.Router();

router.use("/", authRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/cart", cartRouter);
router.use("/categories", categoryRouter);

module.exports = router;

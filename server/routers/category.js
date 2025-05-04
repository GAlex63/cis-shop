const express = require("express");
const Category = require("../models/Category");
const authenticated = require("../middleware/authenticated");
const hasRole = require("../middleware/hasRole");
const ROLES = require("../constants/role");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send({ data: categories });
  } catch (error) {
    res.status(500).send({ error: "Ошибка загрузки категорий" });
  }
});

router.use(authenticated);
router.use(hasRole([ROLES.ADMIN]));

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ error: "Имя категории обязательно" });
    }

    const [category, created] = await Category.findOrCreate({
      where: { name },
    });

    res.status(created ? 201 : 200).send({ data: category, created });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });

    if (deleted) {
      res.send({ message: "Категория удалена" });
    } else {
      res.status(404).send({ error: "Категория не найдена" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

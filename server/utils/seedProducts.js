require("dotenv").config({ path: __dirname + "/../.env" });

const sequelize = require("../db");
const Product = require("../models/Product");
const Category = require("../models/Category");

const seedProducts = async () => {
  await sequelize.sync({ alter: true });

  const radiator = await Category.findOne({ where: { name: "Радиаторы" } });
  const waterHeater = await Category.findOne({
    where: { name: "Водонагреватели" },
  });
  const valve = await Category.findOne({
    where: { name: "Запорная арматура" },
  });

  if (!radiator || !waterHeater || !valve) {
    console.error("Некоторые категории не найдены");
    process.exit(1);
  }

  const baseUrl = "http://localhost:5000/static/images";

  const products = [
    {
      title: "Алюминиевый радиатор Fondital 500мм",
      img_url: `${baseUrl}/radiator.jpg`,
      price: 10000,
      category_id: radiator.id,
      description: "Итальянский радиатор для отопления",
    },
    {
      title: "Водонагреватель Thermex",
      img_url: `${baseUrl}/waterHeater.jpg`,
      price: 20000,
      category_id: waterHeater.id,
      description: "Настенный водонагреватель 100л",
    },
    {
      title: "Кран шаровый STOUT",
      img_url: `${baseUrl}/valve.jpg`,
      price: 1300,
      category_id: valve.id,
      description: "Запорная арматура для водоснабжения",
    },
  ];

  for (const product of products) {
    await Product.findOrCreate({
      where: { title: product.title },
      defaults: product,
    });
  }

  console.log("Тестовые товары добавлены");
  process.exit();
};

seedProducts();

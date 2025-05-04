require("dotenv").config({ path: __dirname + "/../.env" });
const sequelize = require("../db");
const Category = require("../models/Category");

const seedCategories = async () => {
  await sequelize.sync({ force: false });

  const categories = ["Радиаторы", "Водонагреватели", "Запорная арматура"];
  for (const name of categories) {
    await Category.findOrCreate({ where: { name } });
  }

  console.log("Категории добавлены");
  process.exit();
};

seedCategories();

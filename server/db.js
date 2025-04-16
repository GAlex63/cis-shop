const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
  }
);

sequelize
  .query("SELECT NOW()")
  .then(() => console.log("PostgreSQL connected"))
  .catch((error) => console.error("PostgreSQL connection error", error));
module.exports = sequelize;

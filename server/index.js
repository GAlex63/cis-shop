require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const cookieParser = require("cookie-parser");
const setupAssociations = require("./models/associations");
const routers = require("./routers");

const PORT = process.env.PORT;

const app = express();
const cors = require("cors");

setupAssociations();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static("public"));
app.use("/api", routers);

const start = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log(
          "Connection to PostgreSQL has been established successfully."
        );
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

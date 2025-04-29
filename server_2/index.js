// app.js
// const express = require("express");
// const cors = require("cors");
// const app = express();
// require("dotenv").config();

// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const userRoutes = require("./routes/userRoutes");

// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);
// app.use("/orders", orderRoutes);
// app.use("/users", userRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = app;

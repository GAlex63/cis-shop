require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const cookieParser = require("cookie-parser");
const mapUser = require("./helpers/mapUser");
const {
  register,
  login,
  getUsers,
  getRoles,
  updateUser,
  deleteUser,
} = require("./controllers/user");
const { addOrder, getOrders, deleteOrder } = require("./controllers/order");
const {
  addCart,
  deleteAllCart,
  deleteCart,
  getCarts,
} = require("./controllers/cart");
const {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
} = require("./controllers/product");
const authenticated = require("./middleware/authenticated");
const hasRole = require("./middleware/hasRole");
const ROLES = require("./constants/role");
const mapOrders = require("./helpers/mapOrder");
const setupAssociations = require("./models/associations");
const mapProduct = require("./helpers/mapProduct");

const PORT = process.env.PORT;

const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
  try {
    const { login, password } = req.body;
    const { user, token } = await register(login, password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { login: userLogin, password } = req.body;
    const { user, token } = await login(userLogin, password);
    res.cookie("token", token, { httpOnly: true });
    res.send({ error: null, user: mapUser(user) });
  } catch (error) {
    res.status(401).send({ error: error.message || "Unknown error" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true });
  res.send({ message: "Вы успешно вышли из аккаунта" });
});

app.get("/products", async (req, res) => {
  const { products, lastPage } = await getProducts(
    req.query.search,
    req.query.limit,
    req.query.page
  );

  res.send({ data: { lastPage, products: products.map(mapProduct) } });
});
app.get("/products/:id", async (req, res) => {
  const product = await getProduct(req.params.id);

  res.send({ data: mapProduct(product) });
});

app.use(authenticated);
//пользователи
//получение роли
app.get("/users/roles", async (req, res) => {
  const roles = getRoles();

  res.send({ data: roles });
});
// //получение пользователей
app.get("/users", hasRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers();

  res.send({ data: users.map(mapUser) });
});
// //редактирование
app.patch("/users/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role_id: req.body.roleId,
  });
  res.send({ data: mapUser(newUser) });
});
// //удаление
app.delete("/users/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id);

  res.send({ message: "Позьзователь удален", error: null });
});
//товары
//добавление
app.post("/products", hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    const product = req.body.product;

    const newProduct = await addProduct(product);

    res.status(201).send({
      error: null,
      product: newProduct,
    });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});
//удаление
app.delete("/products/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.send({ message: "Товар удален", error: null });
  } catch (error) {
    console.error("Ошибка при удалении продукта:", error);
    res
      .status(500)
      .send({ message: "Ошибка при удалении товара", error: error.message });
  }
});
// //редактирование
app.patch("/products/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await editProduct(productId, productData);
    if (!updatedProduct) {
      return res
        .status(404)
        .send({ error: "Продукт не найден или не удалось обновить данные." });
    }
    res.status(200).send({
      message: "Продукт успешно обновлён.",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Ошибка обновления:", error);
    res
      .status(500)
      .send({
        error: error.message || "Произошла ошибка при обновлении продукта.",
      });
  }
});

app.get("/carts/:userId", async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.query;
    const cart = await getCarts(userId, productId);
    res.status(201).send({ error: null, cart });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});
// //добавить
app.post("/cart", async (req, res) => {
  try {
    const { productId, count } = req.body;
    if (!productId || !count) {
      return res
        .status(400)
        .send({ error: "Product ID and count are required." });
    }
    const cartItem = await addCart(req, res);

    res.status(201).send({ error: null, cartItem });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});
// //удалить все
app.delete("/cart", async (req, res) => {
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
// //удалить один элемент
app.delete("/carts/:id", async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;
    const deletedCart = await deleteCart(userId, productId);
    if (deletedCart) {
      res.send({ message: "Товар удален из корзины", error: null });
    } else {
      res.status(404).send({ error: "Товар не найден в корзине" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message || "Неизвестная ошибка" });
  }
});
//заказы
//добавление
app.post("/order", async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = req.body;

    const newOrder = await addOrder(userId, orderData);
    res.status(201).send({ error: null, order: newOrder });
  } catch (error) {
    res.status(400).send({ error: error.message || "Неизвестная ошибка" });
  }
});

app.delete("/orders/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteOrder(req.params.id);

  res.send({ message: "Заказ удален", error: null });
});

app.get("/orders", hasRole([ROLES.ADMIN]), async (req, res) => {
  const orders = await getOrders();
  console.log(orders);
  res.send({ orders: orders.map(mapOrders) });
});

setupAssociations();

const start = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log(
          "Connection to ProductgreSQL has been established successfully."
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

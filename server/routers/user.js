const express = require("express");
const {
  getUsers,
  getRoles,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const authenticated = require("../middleware/authenticated");
const hasRole = require("../middleware/hasRole");
const ROLES = require("../constants/role");
const mapUser = require("../helpers/mapUser");

const router = express.Router();

router.use(authenticated);

router.get("/roles", async (req, res) => {
  const roles = getRoles();
  res.send({ data: roles });
});

router.get("/", hasRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers();
  res.send({ data: users.map(mapUser) });
});

router.patch("/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role_id: req.body.roleId,
  });
  res.send({ data: mapUser(newUser) });
});

router.delete("/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id);
  res.send({ message: "Пользователь удален", error: null });
});

module.exports = router;

const userModel = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

exports.updateRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const user = await userModel.updateUserRole(id, role);
  res.json(user);
};

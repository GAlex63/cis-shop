const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
  },
  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};

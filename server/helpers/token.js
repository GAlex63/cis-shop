const jwt = require("jsonwebtoken");
require("dotenv").config();
// const sign = "testtest";

module.exports = {
  generate(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "30d" });
  },
  verify(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
  },
};

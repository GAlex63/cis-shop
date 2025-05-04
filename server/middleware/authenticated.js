const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

  if (!token) {
    console.log("Token missing in request");
    return res.status(401).json({ error: "Требуется аутентификация" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.status(401).json({ error: "Неверный токен" });
    }

    req.user = decoded;
    next();
  });
};

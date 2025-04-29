// const { verify } = require("../helpers/token");
// const User = require("../models/User");

// module.exports = async function (req, res, next) {
//   try {
//     const token = req.cookies.token;
//     console.log(token);

//     const tokenData = verify(token);

//     const user = await User.findOne({ where: { id: tokenData.id } });
//     if (!user) {
//       res.send("Authenticated user is not found");
//       return;
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     return res.status(401).send({ error: "проверь токен" });
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // const token =
  //   req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

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

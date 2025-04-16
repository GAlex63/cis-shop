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

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
    console.log(req.token);
    console.log(req.headers);

    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ err, message: "Ошибка верификации токена" });
  }
};

module.exports = function (roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).send({ error: "Требуется аутентификация" });
    }

    if (!roles.includes(req.user.role_id)) {
      return res
        .status(403)
        .send({ error: "Доступ запрещен. Необходимы права администратора" });
    }
    next();
  };
};

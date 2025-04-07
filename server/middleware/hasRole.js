module.exports = function (roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role_id)) {
      return res
        .status(403)
        .send({ error: "Доступ запрещен. Необходимы права администратора" });
    }
    next();
  };
};

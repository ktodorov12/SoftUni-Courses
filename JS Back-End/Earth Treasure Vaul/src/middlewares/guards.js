function isGuest() {
  return function (req, res, next) {
    const user = req.user;

    if (!user) {
      res.redirect("/login");
    } else {
      next();
    }
  };
}

function isUser() {
  return function (req, res, next) {
    const user = req.user;

    if (user) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

module.exports = {
  isGuest,
  isUser,
};

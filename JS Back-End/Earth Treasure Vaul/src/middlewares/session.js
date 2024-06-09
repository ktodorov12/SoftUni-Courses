const { verifyToken } = require("../services/token");

function session() {
  return function (req, res, next) {
    const user = req.cookies.user;

    if (user) {
      try {
        const payload = verifyToken(user);
        req.user = payload;
        res.locals.hasUser = true;
      } catch (error) {
        res.clearCookie("user");
      }
    }

    next();
  };
}

module.exports = session;

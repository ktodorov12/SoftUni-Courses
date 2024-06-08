const { createToken, verifyToken } = require("../services/token");
const { register, login } = require("../services/user");

module.exports = {
  showRegister: (req, res) => {
    res.render("register");
  },
  postRegister: async (req, res) => {
    let user;
    try {
      user = await register(req.body);
    } catch (err) {
      const errors = {
        email: req.body.email,
        message: err.message,
      };
      res.render("register", { errors });
      return;
    }
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  postLogin: async (req, res) => {
    let user;
    try {
      user = await login(req.body);
    } catch (err) {
      const errors = {
        email: req.body.email,
        message: err.message,
      };
      res.render("login", { errors });
      return;
    }
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  },
  logout: (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
  },
};

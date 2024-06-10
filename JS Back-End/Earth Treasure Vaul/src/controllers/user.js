const { createToken } = require("../services/token");
const { login, register } = require("../services/user");

module.exports = {
  loginGet: (req, res) => {
    res.render("login");
  },
  loginPost: async (req, res) => {
    try {
      const user = await login(req.body);
      const token = createToken(user._id);
      res.cookie("user", token, { httpOnly: true });
      res.redirect("/");
    } catch (error) {
      res.render("login", { email: req.body.email });
    }
  },
  registerGet: (req, res) => {
    res.render("register");
  },
  registerPost: async (req, res) => {
    try {
      const user = await register(req.body);
      const token = createToken(user._id);
      res.cookie("user", token, { httpOnly: true });
      res.redirect("/");
    } catch (error) {
      res.render("register", { email: req.body.email });
    }
  },
  logout: (req, res) => {
    res.clearCookie("user");
    res.redirect("/");
  },
};

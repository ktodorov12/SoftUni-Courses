const { Router } = require("express");
const { body, validationResult } = require('express-validator');

const { createToken } = require("../services/token");
const { login, register } = require("../services/user");
const { isUser, isGuest } = require("../middlewares/guards");

const userRouter = Router();

userRouter
  .route("/login")
  .get(isUser(), (req, res) => {
    res.render("login");
  })
  .post(isUser(), async (req, res) => {
    try {
      const user = await login(req.body);
      const token = createToken(user._id);
      res.cookie("user", token, { httpOnly: true });
      res.redirect("/");
    } catch (error) {
      res.render("login", { email: req.body.email });
    }
  });

userRouter
  .route("/register")
  .get(isUser(), (req, res) => {
    res.render("register");
  })
  .post(
    isUser(),
    body("email").trim().isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isAlphanumeric().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long and may contain only English letters and numbers"),
    body("repass")
      .trim()
      .custom((value, { req }) => value == req.body.password)
      .withMessage("Passwords don't match"),
    async (req, res) => {
      try {
        const result = validationResult(req);

        if (result.errors.length) {
          throw result.errors;
        }

        const user = await register(req.body);
        const token = createToken(user._id);

        res.cookie("user", token, { httpOnly: true });
        res.redirect("/");
      } catch (error) {
        res.render("register", { email: req.body.email });
      }
    }
  );

userRouter.get("/logout", isGuest(), (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

module.exports = { userRouter };

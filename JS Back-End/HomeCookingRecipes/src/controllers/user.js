const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const { isUser, isGuest } = require("../middlewares/guards");

const { createToken } = require("../services/token");
const { login, register } = require("../services/user");
const { parseError } = require("../util");

const userRouter = Router();

userRouter.get("/login", isUser(), (req, res) => {
  res.locals.title = "Register - Home Cooking Recipes";
  res.render("login");
});

userRouter.post("/login", isUser(), async (req, res) => {
  try {
    const result = validationResult(req);

    if (result.errors.length) {
      throw result.errors;
    }

    const user = await login(req.body);
    const token = createToken(user._id);

    res.cookie("user", token, { httpOnly: true });
    res.redirect("/");
  } catch (err) {
    const { email } = req.body;
    res.render("login", { data: { email }, errors: parseError(err).errors });
    return;
  }
});

userRouter.get("/register", isUser(), (req, res) => {
  res.locals.title = "Register - Home Cooking Recipes";
  res.render("register");
});

//TODO check validation
userRouter.post(
  "/register",
  isUser(),
  body("username").trim().isLength({ min: 2, max: 20 }).withMessage("Username must be at least 2 and less than 20 characters"),
  body("email").trim().isLength({ min: 10 }).withMessage("Please enter a valid email"),
  body("password").trim().isLength({ min: 4 }).withMessage("Password must be at least 4 characters long"),
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
    } catch (err) {
      const { email, username } = req.body;
      res.render("register", { data: { email, username }, errors: parseError(err).errors });
      console.log(parseError(err).errors );
      return;
    }
  }
);

userRouter.get("/logout", isGuest(), (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

module.exports = { userRouter };

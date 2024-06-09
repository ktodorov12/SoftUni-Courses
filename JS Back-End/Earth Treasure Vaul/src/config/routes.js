const { Router } = require("express");

const { isUser } = require("../middlewares/guards");

const { home, dashboard, search } = require("../controllers/catalog");
const { loginGet, loginPost, registerGet, registerPost, logout } = require("../controllers/user");

const router = Router();
router.get("/", home);
router.route("/login")
    .get(isUser(), loginGet)
    .post(isUser(), loginPost);
router.route("/register")
    .get(isUser(), registerGet)
    .post(isUser(), registerPost);
router.get("/logout", logout);
router.get("/dashboard", dashboard);
router.get("/search", search);

module.exports = router;

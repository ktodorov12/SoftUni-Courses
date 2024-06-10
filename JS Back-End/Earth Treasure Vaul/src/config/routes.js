const { Router } = require("express");

const { isUser, isGuest, isOwner } = require("../middlewares/guards");

const { home, dashboard, search } = require("../controllers/catalog");
const { loginGet, loginPost, registerGet, registerPost, logout } = require("../controllers/user");
const { notFound } = require("../controllers/notFound");
const { stonesGet, stonesPost, like, editGet, editPost, deleteStone } = require("../controllers/stones");
const { details } = require("../controllers/details");

const router = Router();
router.get("/", home);
router.route("/login")
    .get(isUser(), loginGet)
    .post(isUser(), loginPost);
router.route("/register")
    .get(isUser(), registerGet)
    .post(isUser(), registerPost);
router.get("/logout", isGuest(), logout);
router.get("/dashboard", dashboard);
router.get("/search", search);

router.route("/stones")
    .get(isGuest(), stonesGet)
    .post(isGuest(), stonesPost);
router.get("/details/:stoneId", details);
router.get("/like/:stoneId", isGuest(), like);
router.route("/edit/:stoneId")
    .get(isGuest(), isOwner(), editGet)
    .post(isGuest(), isOwner(), editPost);
router.get("/delete/:stoneId", isGuest(), isOwner(), deleteStone);

router.get("*", notFound);
module.exports = router;

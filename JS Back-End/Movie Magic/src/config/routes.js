const { Router } = require("express");
const { home: homeView, about, search, details } = require("../controllers/catalog");
const { createView, postCreate, deleteMovie, editGet, editPost } = require("../controllers/movie");
const { notFound } = require("../controllers/notFound");
const { castView, postCast, attachCastView, attachCast } = require("../controllers/cast");
const { showRegister, postRegister, showLogin, postLogin, logout } = require("../controllers/user");
const { isGuest, isUser, isOwner } = require("../middlewares/guards");

const router = Router();

router.get("/", homeView);
router.route("/register")
        .get(isUser(), showRegister)
        .post(isUser(), postRegister);
router.route("/login")
        .get(isUser(), showLogin)
        .post(isUser(), postLogin);
router.get("/logout", logout);
router.get("/about", about);
router.get("/search", search);

router.route("/create")
        .get(isGuest(), createView)
        .post(isGuest(), postCreate);
router.get("/details/:id", details);
router.route("/edit/:movieId")
        .get(isGuest(), isOwner(), editGet)
        .post(isGuest(), isOwner(), editPost);
router.get("/delete/:movieId", isGuest(), isOwner(), deleteMovie);

router.route("/cast")
        .get(isGuest(), castView)
        .post(isGuest(), postCast);

router.route("/attach/:movieId")
        .get(isGuest(), isOwner(), attachCastView)
        .post(isGuest(), isOwner(), attachCast);

router.get("*", notFound);

module.exports = router;

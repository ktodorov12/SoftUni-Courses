const { Router } = require("express");
const { home: homeView, about, search, details } = require("../controllers/catalog");
const { createView, postCreate } = require("../controllers/movie");
const { notFound } = require("../controllers/notFound");
const { castView, postCast, attachCastView, attachCast } = require("../controllers/cast");

const router = Router();

router.get("/", homeView);
router.get("/about", about);
router.get("/search", search);
router.route("/create")
        .get(createView)
        .post(postCreate);
router.get("/details/:id", details);

router.route("/cast")
        .get(castView)
        .post(postCast);

router.route("/attach/:movieId")
        .get(attachCastView)
        .post(attachCast);

router.get("*", notFound);

module.exports = router;

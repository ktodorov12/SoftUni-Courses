const { Router } = require("express");
const { home: homeView, about, search, details } = require("../controllers/catalog");
const { createView, postCreate } = require("../controllers/create");
const { notFound } = require("../controllers/notFound");

const router = Router();

router.get("/", homeView);
router.get("/about", about);
router.get("/search", search);
router.route("/create")
        .get(createView)
        .post(postCreate);
router.get("/details/:id", details);

router.get("*", notFound);

module.exports = router;

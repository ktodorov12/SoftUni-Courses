const { Router } = require("express");
const { home: homeView, about, search } = require("../controllers/catalog");
const { createView } = require("../controllers/create");
const { nodFound } = require("../controllers/nodFound");

const router = Router();
router.get("/", homeView);
router.get("/about", about);
router.get("/search", search);
router.get("/create", createView);

router.get("*", nodFound);

module.exports = router;

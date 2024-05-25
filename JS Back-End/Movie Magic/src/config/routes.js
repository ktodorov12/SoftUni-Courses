const { Router } = require("express");
const { home: homeView, about, search } = require("../controllers/catalog");
const { createView } = require("../controllers/create");

const router = Router();
router.get("/", homeView);
router.get("/about", about);
router.get("/search", search);
router.get("/create", createView);

module.exports = router;

const { Router } = require("express");
const { home: homeView } = require("../controllers/catalog");
const { createView } = require("../controllers/create");

const router = Router();
router.get("/", homeView);
router.get("/create", createView);

module.exports = router;

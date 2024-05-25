const { Router } = require("express");
const { home } = require("../controllers/catalog");

const router = Router();
router.get("/", home);

module.exports = router;

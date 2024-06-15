const { Router } = require("express");

const { getStonesHome, getStonesDashboard, searchForStone } = require("../services/stones");

const catalogRouter = Router();

catalogRouter.get("/", async (req, res) => {
  const stones = await getStonesHome();

  res.render("home", { stones });
});

catalogRouter.get("/dashboard", async (req, res) => {
  const stones = await getStonesDashboard();

  res.render("dashboard", { stones });
});

catalogRouter.get("/search", async (req, res) => {
  const stones = await searchForStone(req.query);

  res.render("search", { stones });
});

module.exports = { catalogRouter };

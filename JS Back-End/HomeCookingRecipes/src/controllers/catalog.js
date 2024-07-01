const { Router } = require("express");
const { getHome, getDashboard, searchForRecipe } = require("../services/recipes");

const catalogRouter = Router();

catalogRouter.get("/", async (req, res) => {
  const recipes = await getHome();

  res.locals.title = "Home Cooking Recipes";
  res.render("home", { recipes });
});

catalogRouter.get("/dashboard", async (req, res) => {
  const recipes = await getDashboard();

  res.locals.title = "Recipe Catalog - Home Cooking Recipes";
  res.render("catalog", { recipes });
});

catalogRouter.get("/search", async (req, res) => {
  const found = await searchForRecipe(req.query);

  console.log(found);
  res.locals.title = "Search Recipes - Home Cooking Recipes";
  res.render("search", { found });
});

module.exports = { catalogRouter };

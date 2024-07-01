const { Router } = require("express");

const { getById } = require("../services/recipes");

const detailsRouter = Router();

detailsRouter.get("/details/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await getById(recipeId);
  
  if (!recipe) {
    res.render("404");
    return;
  }
  res.locals.title = `${recipe.title} - Home Cooking Recipes`;
  
  recipe.isOwner = recipe.owner.toString() == req.user?.userId;
  const mapped = recipe.recommendedList.map((r) => r.toString());
  recipe.recommended = mapped.includes(req.user?.userId);
  recipe.recomendedNumber = recipe.recommendedList.length;

  res.render("details", { recipe });
});

module.exports = { detailsRouter };


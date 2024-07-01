const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const { isGuest, isOwner, isNotOwner, hasRecommended } = require("../middlewares/guards");
const { create, deleteById, edit, getById, recommend } = require("../services/recipes");
const { parseError } = require("../util");

const recipesRouter = Router();

recipesRouter.get("/recipe", isGuest(), (req, res) => {
  res.locals.title = "Create Recipe - Home Cooking Recipes";
  res.render("create");
});

recipesRouter.post(
  "/recipe",
  isGuest(),
  body("title").trim().isLength({ min: 2 }).withMessage("Title must be at least 2 charactes"),
  body("description").trim().isLength({ min: 10, max: 100 }).withMessage("Description must be at least 10 and less than 100 characters"),
  body("ingredients").trim().isLength({ min: 10, max: 200 }).withMessage("Ingredients must be at least 10 and less than 200 characters"),
  body("instructions").trim().isLength({ min: 10 }).withMessage("Instructions must be at least 10 characters"),
  body("image").trim().isURL({require_tld: false, require_protocol: true}).withMessage("Invalid Url"),
  async (req, res) => {
    try {
      const result = validationResult(req);

      if (result.errors.length) {
        throw result.errors;
      }

      req.body.owner = req.user.userId;
      await create(req.body);

      res.redirect("/dashboard");
    } catch (err) {
      res.render("create", { data: req.body, errors: parseError(err).errors });
    }
  }
);

recipesRouter.get("/recommend/:recipeId", isGuest(), isNotOwner(), hasRecommended(), async (req, res) => {
  const { recipeId } = req.params;
  const { userId } = req.user;
  await recommend(recipeId, userId);
  res.redirect(`/details/${recipeId}`);
});

recipesRouter.get("/edit/:recipeId", isGuest(), isOwner(), async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await getById(recipeId);

  res.locals.title = "Edit Recipe - Home Cooking Recipes";
  res.render("edit", { recipe });
});

recipesRouter.post(
  "/edit/:recipeId",
  isGuest(),
  body("title").trim().isLength({ min: 2 }).withMessage("Title must be at least 2 charactes"),
  body("description").trim().isLength({ min: 10, max: 100 }).withMessage("Description must be at least 10 and less than 100 characters"),
  body("ingredients").trim().isLength({ min: 10, max: 200 }).withMessage("Ingredients must be at least 10 and less than 200 characters"),
  body("instructions").trim().isLength({ min: 10 }).withMessage("Instructions must be at least 10 characters"),
  body("image").trim().isURL({require_tld: false, require_protocol: true}).withMessage("Invalid Url"),
  isGuest(),
  isOwner(),
  async (req, res) => {
    try {
      const result = validationResult(req);

      if (result.errors.length) {
        throw result.errors;
      }
      const { recipeId } = req.params;
      let data = req.body;
      data.owner = req.user.userId;

      await edit(recipeId, data);
      res.redirect(`/details/${recipeId}`);
    } catch (err) {
      res.render("edit", { recipe: req.body, errors: parseError(err).errors });
    }
  }
);

recipesRouter.get("/delete/:recipeId", isGuest(), isOwner(), async (req, res) => {
  try {
    await deleteById(req.params.recipeId);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});

module.exports = { recipesRouter };

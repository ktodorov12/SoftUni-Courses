const Recipes = require("../models/Recipes");

function isGuest() {
  return function (req, res, next) {
    const user = req.user;

    if (!user) {
      res.redirect("/login");
    } else {
      next();
    }
  };
}

function isUser() {
  return function (req, res, next) {
    const user = req.user;

    if (user) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function isOwner() {
  return async function (req, res, next) {
    const { recipeId } = req.params;
    const { userId } = req.user;

    const foundRecipe = await Recipes.findOne({
      _id: recipeId,
      owner: userId,
    });

    if (foundRecipe) {
      next();
    } else {
      res.redirect("/");
    }
  };
}

function isNotOwner() {
  return async function (req, res, next) {
    const { recipeId } = req.params;
    const { userId } = req.user;

    const foundRecipe = await Recipes.findOne({
      _id: recipeId,
      owner: userId,
    });
    
    if (foundRecipe) {
      res.redirect(`/details/${recipeId}`);
    } else {
      next();
    }
  };
}

function hasRecommended() {
  return async function (req, res, next) {
    const { recipeId } = req.params;

    const foundRecipe = await Recipes.findOne({ _id: recipeId });

    const mapped = foundRecipe.recommendedList.map((r) => r.toString());
    const hasRecommended = mapped.includes(req.user?.userId);

    if (hasRecommended) {
      res.redirect(`/details/${recipeId}`);
    } else {
      next();
    }
  };
}

module.exports = {
  isGuest,
  isUser,
  isOwner,
  isNotOwner,
  hasRecommended,
};

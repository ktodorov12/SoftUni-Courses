const Recipes = require("../models/Recipes");

async function getHome() {
  const recipes = Recipes.find({}).sort({ _id: -1 }).limit(3).lean();
  return recipes;
}

async function getDashboard() {
  const recipes = Recipes.find({}).lean();
  return recipes;
}

async function getById(recipeId) {
  const foundRecipe = Recipes.findOne({ _id: recipeId }).lean();
  return foundRecipe;
}

async function create(data) {
  return Recipes.create({
    title: data.title,
    ingredients: data.ingredients,
    instructions: data.instructions,
    description: data.description,
    image: data.image,
    owner: data.owner,
  });
}

async function edit(id, data) {
  const recipe = await Recipes.findById(id);
  recipe.title = data.title;
  recipe.ingredients = data.ingredients;
  recipe.instructions = data.instructions;
  recipe.description = data.description;
  recipe.image = data.image;
  recipe.owner = data.owner;
  
  return recipe.save();
}

async function deleteById(id) {
  return Recipes.findByIdAndDelete(id);
}

async function recommend(recipeId, userId) {
  return Recipes.findByIdAndUpdate(recipeId, { $push: { recommendedList: userId } });
}

async function searchForRecipe({ title }) {
  const reg = new RegExp(title, "i");

  if (!title) {
    return Recipes.find({}).lean();
  }

  return Recipes.find({ title: reg }).lean();
}

module.exports = {
  getHome,
  getDashboard,
  getById,
  create,
  recommend,
  edit,
  deleteById,
  searchForRecipe,
};

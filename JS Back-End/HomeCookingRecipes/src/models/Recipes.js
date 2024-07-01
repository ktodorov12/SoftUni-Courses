const { Schema, model, Types } = require("mongoose");

const recipeSchema = new Schema({
  title: {
    type: String,
    reqired: true,
  },
  ingredients: {
    type: String,
    reqired: true,
  },
  instructions: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    reqired: true,
  },
  image: {
    type: String,
    reqired: true,
  },
  recommendedList: {
    type: [Types.ObjectId],
    default: [],
    ref: "User",
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Recipe", recipeSchema);

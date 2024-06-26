const { Schema, SchemaTypes: Types, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    reqired: true,
  },
  genre: {
    type: String,
    reqired: true,
  },
  director: {
    type: String,
    reqired: true,
  },
  year: {
    type: Number,
    reqired: true,
    min: 1980,
    max: 3100,
  },
  rating: {
    type: Number,
    reqired: true,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
    reqired: true,
    max: 1000,
  },
  imageUrl: {
    type: String,
    reqired: true,
    match: [/^http/, "invalid Url"],
  },
  cast: {
    type: [Types.ObjectId],
    default: [],
    ref: "Cast",
  },
  authorId: {
    type: Types.ObjectId,
    ref: "User",
    reqired: true
  }
});

module.exports = model("Movie", movieSchema);

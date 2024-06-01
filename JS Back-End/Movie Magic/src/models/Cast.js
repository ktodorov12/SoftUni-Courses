const { Schema, SchemaTypes: Types, model } = require("mongoose");

const castSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 8,
    max: 70,
  },
  born: {
    type: String,
    required: true,
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^http/, "invalid Url"],
  },
});

module.exports = model("Cast", castSchema);

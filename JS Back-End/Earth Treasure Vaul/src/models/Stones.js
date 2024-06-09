const { Schema, model, Types } = require("mongoose");

const stonesSchema = new Schema({
  name: {
    type: String,
    reqired: true,
  },
  category: {
    type: String,
    reqired: true,
  },
  color: {
    type: String,
    reqired: true,
  },
  imageUrl: {
    type: String,
    reqired: true,
  },
  location: {
    type: String,
    reqired: true,
  },
  formula: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    reqired: true,
  },
  likedList: {
    type: [Types.ObjectId],
    default: [],
    ref: "User",
  },
  ownerId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Stones", stonesSchema);

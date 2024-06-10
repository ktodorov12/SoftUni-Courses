const Stones = require("../models/Stones");

async function getStonesHome() {
  const stones = await Stones.find({}).sort({ _id: -1 }).limit(3).lean();
  return stones;
}

async function getStonesDashboard() {
  const stones = await Stones.find({}).lean();
  return stones;
}

async function getStoneById(stoneId) {
  const foundStone = await Stones.findOne({ _id: stoneId }).lean();
  return foundStone;
}

async function createStone(data) {
  return await Stones.create({
    name: data.name,
    category: data.category,
    color: data.color,
    imageUrl: data.imageUrl,
    location: data.location,
    formula: data.formula,
    description: data.description,
    ownerId: data.ownerId,
  });
}

async function editStone(id, data) {
  const stone = await Stones.findById(id);
  stone.name = data.name;
  stone.category = data.category;
  stone.color = data.color;
  stone.imageUrl = data.imageUrl;
  stone.location = data.location;
  stone.formula = data.formula;
  stone.description = data.description;
  stone.ownerId = data.ownerId;

  return await stone.save();
}

async function deleteStoneId(id) {
  return await Stones.findByIdAndDelete(id);
}

async function likeStone(stoneId, userId) {
  return await Stones.findByIdAndUpdate(stoneId, { $push: { likedList: userId } });
}

async function searchForStone({ name }) {
  const reg = new RegExp(name, "i");

  if (!name) {
    return await Stones.find({}).lean();
  }
  
  return await Stones.find({ name: reg }).lean();
}

module.exports = {
  getStonesHome,
  getStonesDashboard,
  getStoneById,
  createStone,
  likeStone,
  editStone,
  deleteStoneId,
  searchForStone,
};

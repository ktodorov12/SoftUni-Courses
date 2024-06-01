const mongoose = require("mongoose");

async function dbConfig() {
  try {
    await mongoose.connect("mongodb://localhost:27017/workshop-movies");
    mongoose.set("strictQuery", false);
    console.log("Database conencted");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConfig;

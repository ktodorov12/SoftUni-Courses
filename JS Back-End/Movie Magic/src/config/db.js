const mongoose = require("mongoose");

async function dbConfig() {
  try {
    await mongoose.connect("mongodb://localhost:27017/workshop-movies");
    console.log("Database conencted");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConfig;

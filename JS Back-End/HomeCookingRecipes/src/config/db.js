const mongoose = require("mongoose");

async function dbConfig() {
    try {
        await mongoose.connect("mongodb://localhost:27017/exam-homeCookingRecipes");
        mongoose.set("strictQuery", false);
        console.log("Database conncected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConfig
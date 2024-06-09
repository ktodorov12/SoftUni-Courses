const mongoose = require("mongoose");

async function dbConfig() {
    try {
        await mongoose.connect("mongodb://localhost:27017/exams");
        mongoose.set("strictQuery", false);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConfig
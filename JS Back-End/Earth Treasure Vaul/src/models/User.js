const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    reqired: true,
  },
  password: {
    type: String,
    reqired: true,
  },
});

module.exports = model("User", userSchema);

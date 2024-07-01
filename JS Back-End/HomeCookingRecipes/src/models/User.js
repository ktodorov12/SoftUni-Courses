const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    reqired: true,
  },
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

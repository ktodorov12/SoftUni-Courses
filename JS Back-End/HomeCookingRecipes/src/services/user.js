const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register({ username, email, password }) {
  const exists = await User.findOne({ email });

  if (exists) {
    const err = new Error("Email is already used");
    err.errors = { email: "Email is already used" };
    throw err;
  }

  const hashed = await bcrypt.hash(password, 10);
  return User.create({
    username,
    email,
    password: hashed,
  });
}

async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const check = bcrypt.compare(password, user.password);

  if (!check) {
    throw new Error("Invalid email or password");
  }

  return user;
}

module.exports = {
  register,
  login,
};

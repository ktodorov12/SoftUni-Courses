const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register({ email, password, repass }) {
  if (!email || !password) {
    throw new Error("All fields requiered");
  }
  if (password !== repass) {
    throw new Error("Password don't match");
  }

  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error("Invalid Credentials");
  }

  const hashed = await bcrypt.hash(password, 10);
  return await User.create({
    email,
    password: hashed,
  });
}

async function login({ email, password }) {
  if (!email || !password) {
    throw new Error("All fields requiered");
  }

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

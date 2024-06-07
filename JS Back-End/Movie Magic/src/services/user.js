const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  register: async ({ email, password, repass }) => {
    const exists = await User.findOne({ email });

    if (exists) {
      throw new Error("Invalid Credentials");
    }
    if (!email || !password) {
      throw new Error("All fields required");
    }
    if (password !== repass) {
      throw new Error("Passwords don't match");
    }

    const hashed = await bcrypt.hash(password, 10);
    return await User.create({
      email: email,
      password: hashed,
    });
  },
  login: async ({ email, password }) => {
    const exists = await User.findOne({ email });

    if (!exists) {
      throw new Error("Invalid email or password");
    }

    const checkedPass = await bcrypt.compare(password, exists.password);

    if (!checkedPass) {
      throw new Error("Invalid email or password");
    }

    return exists;
  },
};

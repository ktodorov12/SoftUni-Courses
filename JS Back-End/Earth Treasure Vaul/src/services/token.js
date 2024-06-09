const jwt = require("jsonwebtoken");
const secret = "Very protect, Much secret";

function createToken(userId) {
  const payload = { userId };
  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = {
  createToken,
  verifyToken,
};

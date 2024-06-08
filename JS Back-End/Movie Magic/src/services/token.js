const jwt = require("jsonwebtoken");

function createToken(userId) {
  const payload = {
    userId,
  };
  return jwt.sign(payload, "keyborad cat");
}

function verifyToken(token) {
  const payload = jwt.verify(token, "keyborad cat");
  return payload;
}

module.exports = {
  createToken,
  verifyToken,
};

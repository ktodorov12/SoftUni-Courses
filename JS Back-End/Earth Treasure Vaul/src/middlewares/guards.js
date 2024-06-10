const Stones = require("../models/Stones");

function isGuest() {
  return function (req, res, next) {
    const user = req.user;

    if (!user) {
      res.redirect("/login");
    } else {
      next();
    }
  };
}

function isUser() {
  return function (req, res, next) {
    const user = req.user;

    if (user) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function isOwner() {
  return async function (req, res, next) {
    const { stoneId } = req.params;
    const { userId } = req.user;

    const foundStone = await Stones.findOne({
      _id: stoneId,
      ownerId: userId,
    });

    if (foundStone) {
      next();
    } else {
      res.redirect("/");
    }
  };
}

module.exports = {
  isGuest,
  isUser,
  isOwner,
};

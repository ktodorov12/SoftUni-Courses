const Movie = require("../models/Movie");

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
    const movieId = req.params.movieId;
    const userId = req.user.userId;

    const foundMovie = await Movie.findOne({
      _id: movieId,
      authorId: userId,
    });

    if (!foundMovie) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

module.exports = {
  isGuest,
  isUser,
  isOwner
};

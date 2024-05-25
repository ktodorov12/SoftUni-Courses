const { allMovies, movieById } = require("../services/movies");

module.exports = {
  home: async (req, res) => {
    const movies = await allMovies();

    res.render("home", { movies });
  },
  about: (req, res) => {
    res.render("about");
  },
  search: (req, res) => {
    res.render("search");
  },
  details: async (req, res) => {
    const { id } = req.params;
    const foundMovie = await movieById(id);
    foundMovie.starAmount = "&#x2605".repeat(foundMovie.rating);

    res.render("details", { movie: foundMovie });
  },
};

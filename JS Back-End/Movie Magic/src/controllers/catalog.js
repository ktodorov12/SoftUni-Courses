const { allMovies, movieById, searchMovie } = require("../services/movies");

module.exports = {
  home: async (req, res) => {
    const movies = await allMovies();

    res.render("home", { movies });
  },
  about: (req, res) => {
    res.render("about");
  },
  search: async (req, res) => {
    const movies = await searchMovie(req.query);

    res.render("search", { movies, query: req.query });
  },
  details: async (req, res) => {
    const { id } = req.params;
    const foundMovie = await movieById(id);

    if(!foundMovie) {
      return res.render("404");
    }

    foundMovie.starAmount = "&#x2605".repeat(foundMovie.rating);

    res.render("details", { movie: foundMovie });
  },
};

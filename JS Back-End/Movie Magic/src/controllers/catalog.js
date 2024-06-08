const { allMovies, searchMovie, getPopuplatedMovie } = require("../services/movies");

module.exports = {
  home: async (req, res) => {
    const movies = await allMovies();
    const user = req.user;

    if (user) {
      const currUserId = user.userId;
      movies.forEach((m) => {
        const authorId = m.authorId.toString();
        m.isAuthor = authorId == currUserId;
      });
    }

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
    const foundMovie = await getPopuplatedMovie(id);

    if (!foundMovie) {
      return res.render("404");
    }

    foundMovie.isAuthor = foundMovie.authorId.toString() == req.user.userId;
    foundMovie.starAmount = "&#x2605".repeat(foundMovie.rating);

    res.render("details", { movie: foundMovie });
  },
};

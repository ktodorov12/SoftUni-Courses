const { allMovies } = require("../services/movies");

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
  details: (req, res) => {
    res.render("details");
  },
};

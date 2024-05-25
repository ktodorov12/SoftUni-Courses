const { createMovie } = require("../services/movies");

module.exports = {
  createView: (req, res) => {
    res.render("create");
  },
  postCreate: async (req, res) => {
    const createdMovie = await createMovie(req.body);
    res.redirect(`/details/${createdMovie.id}`);
  },
};

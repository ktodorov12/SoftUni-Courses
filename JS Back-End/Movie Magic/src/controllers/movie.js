const { createMovie } = require("../services/movies");

module.exports = {
  createView: (req, res) => {
    res.render("create");
  },
  postCreate: async (req, res) => {
    const errors = {
      title: !req.body.title,
      genre: !req.body.genre,
      director: !req.body.director,
      year: !req.body.year,
      imageUrl: !req.body.imageUrl,
      rating: !req.body.rating,
      description: !req.body.description,
    };

    if (Object.values(errors).includes(true)) {
      return res.render("create", { movie: req.body, errors });
    }

    const createdMovie = await createMovie(req.body);
    res.redirect(`/details/${createdMovie._id}`);
  },
};

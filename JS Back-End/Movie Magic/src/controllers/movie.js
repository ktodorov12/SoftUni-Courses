const { createMovie, deleteById, movieById, editMovie } = require("../services/movies");

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
      errors.message = "All fileds are required";
      return res.render("create", { movie: req.body, errors });
    }

    req.body.authorId = req.user.userId;
    try {
      const createdMovie = await createMovie(req.body);
      res.redirect(`/details/${createdMovie._id}`);
    } catch (error) {
      let errors = { message: error.message };
      res.render("create", { errors });
    }
  },
  editGet: async (req, res) => {
    const { movieId } = req.params;
    const foundMovie = await movieById(movieId);
    res.render("edit", { movie: foundMovie });
  },
  editPost: async (req, res) => {
    const { movieId } = req.params;
    let movie = req.body
    movie.authorId = req.user.userId;
    try {
      await editMovie(movieId, movie);
      res.redirect(`/details/${movieId}`);
    } catch (error) {
      let errors = { message: error.message };
      res.render("create", { movie, errors });
    }
  },
  deleteMovie: async (req, res) => {
    const { movieId } = req.params;
    await deleteById(movieId);
    res.redirect("/");
  },
};

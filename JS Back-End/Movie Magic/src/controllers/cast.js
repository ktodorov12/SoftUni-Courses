const { ObjectId } = require("mongodb");
const { createCast, getAllCast, castToMovie } = require("../services/cast");
const { movieById } = require("../services/movies");

module.exports = {
  castView: (req, res) => {
    res.render("cast-create");
  },
  postCast: async (req, res) => {
    await createCast(req.body);
    res.redirect("/");
  },
  attachCastView: async (req, res) => {
    const { movieId } = req.params;

    const movie = await movieById(movieId);
    const allCast = (await getAllCast()).map((c) => c._id = new ObjectId(c._id)).filter((c) => !movie.cast.includes(c._id));
    console.log(movie.cast);
    console.log(allCast);

    res.render("cast-attach", { movie, allCast });
  },
  attachCast: async (req, res) => {
    const { movieId } = req.params;
    const castName = req.body.cast;

    if (!movieId || !castName) {
      return res.render("/");
    }

    if (castName == "none") {
      const movie = await movieById(movieId);
      const allCast = await getAllCast();
      return res.render("cast-attach", { movie, allCast, error: true });
    }

    await castToMovie(movieId, castName);
    res.redirect(`/details/${movieId}`);
  },
};

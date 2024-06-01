const Movie = require("../models/Movie");

module.exports = {
  allMovies: async () => await Movie.find().lean(),
  movieById: async (id) => await Movie.findById(id).populate("cast").lean(),
  createMovie: async (data) => await Movie.create(data),
  searchMovie: async ({ title, genre, year }) => {
    const movies = await Movie.find().lean();

    if (!title && !genre && !year) {
      return movies;
    }

    const found = movies.filter((m) => {
      if (title && !m.title.toLowerCase().includes(title.toLowerCase())) {
        return false;
      }
      if (genre && m.genre.toLowerCase() != genre.toLowerCase()) {
        return false;
      }
      if (year && m.year != year) {
        return false;
      }

      return true;
    });

    return found;
  },
};

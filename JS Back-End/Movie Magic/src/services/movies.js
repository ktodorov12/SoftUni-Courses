const Movie = require("../models/Movie");

module.exports = {
  allMovies: async () => await Movie.find().lean(),
  movieById: async (id) => await Movie.findById(id).lean(),
  getPopuplatedMovie: async (id) => await Movie.findById(id).populate("cast").lean(),
  createMovie: async (data) => {
    return await Movie.create({
      title: data.title,
      genre: data.genre,
      director: data.director,
      year: data.year,
      rating: data.rating,
      description: data.description,
      imageUrl: data.imageUrl,
      authorId: data.authorId,
    });
  },
  editMovie: async (id, data) => {
    const movie = await Movie.findById(id);
    movie.title = data.title;
    movie.genre = data.genre;
    movie.director = data.director;
    movie.year = data.year;
    movie.rating = data.rating;
    movie.description = data.description;
    movie.imageUrl = data.imageUrl;
    movie.authorId = data.authorId;

    await movie.save();
  },
  deleteById: async (id) => await Movie.findByIdAndDelete(id),
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

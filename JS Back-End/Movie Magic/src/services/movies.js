const fs = require("fs/promises");
const path = require("path");
const Movie = require("../models/Movie");

const dataPath = path.join(__dirname, "..", "..", "data", "database.json");

async function readDatabase() {
  const movies = JSON.parse(await fs.readFile(dataPath));
  return movies;
}

async function writeDatabase(data) {
  const movies = JSON.parse(await fs.readFile(dataPath));
  movies.push(data);
  await fs.writeFile(dataPath, JSON.stringify(movies, null, 2));
}

function movieModel(movie) {
  return new Movie(movie);
}

module.exports = {
  allMovies: async () => {
    const movies = await readDatabase();
    return movies.map(movieModel);
  },
  movieById: async (id) => {
    const movies = await readDatabase();
    const foundMovie = movies.find((m) => m.id == id);
    return movieModel(foundMovie);
  },
  createMovie: async (data) => {
    data.id = 5; // TODO: fix hardcoded id;
    const movie = movieModel(data);
    await writeDatabase(movie);
    return movie;
  },
  searchMovie: async ({ title, genre, year }) => {
    const movies = await readDatabase();

    if (!title && !genre && !year) {
      return movies.map(movieModel);
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

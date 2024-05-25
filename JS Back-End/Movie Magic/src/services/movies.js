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
  }
};

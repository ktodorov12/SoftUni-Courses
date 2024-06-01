const Cast = require("../models/Cast");
const Movie = require("../models/Movie");

module.exports = {
  getAllCast: async () => await Cast.find().lean(),
  createCast: async (data) => {
    return await Cast.create({
      name: data.name,
      age: Number(data.age),
      born: data.born,
      nameInMovie: data.nameInMovie,
      imageUrl: data.imageUrl,
    });
  },
  castToMovie: async (movieId, castName) => {
    try {
      const cast = await Cast.findOne({ name: castName });
      await Movie.findByIdAndUpdate(movieId, { $push: { cast: cast._id } });
    } catch (error) {
      console.log(error);
    }
  },
};

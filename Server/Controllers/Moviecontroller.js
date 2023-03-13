const movie = require("../Models/MovieModel");

const addmovie = async (req, res) => {
  try {
    const newMovie = await movie.create(req.body);
    res.json({ newMovie, msg: "Movie Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};
const deletedMovie = async (req, res) => {
  try {
    const deletedMovie = await movie.findByIdAndDelete(req.params.id);
    res.json({ msg: "Movie has been deleted successfully !!", deletedMovie });
  } catch (error) {
    console.log(error);
  }
};

const GetAllMovies = async (req, res) => {
  try {
    const movies = await movie.find();
    res.json(movies);
  } catch (error) {
    console.log(error);
  }
};

const UpdateMovie = async (req, res) => {
  try {
    const updatedMovie = await movie.findByIdAndUpdate(
      req.params.idMovie,
      req.body,
      { new: true }
    );
    res.json(updatedMovie);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addmovie, deletedMovie, GetAllMovies, UpdateMovie };

const express = require("express");
const {
  addmovie,
  deletedMovie,
  GetAllMovies,
  UpdateMovie,
} = require("../Controllers/Moviecontroller");
const movie = require("../Models/MovieModel");
const router = express.Router();

router.post("/", addmovie);

router.get("/", GetAllMovies);

router.delete("/:id", deletedMovie);

router.put("/:idMovie", UpdateMovie);

module.exports = router;

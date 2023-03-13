const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: String,
  description: String,

  categories: String,
  url: String,
});

module.exports = mongoose.model("movie", MovieSchema);

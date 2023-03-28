const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: String,
  description: String,
  Img: {
    type: mongoose.Schema.Types.Mixed,
  },
  categories: String,
  url: String,
});

module.exports = mongoose.model("movie", MovieSchema);

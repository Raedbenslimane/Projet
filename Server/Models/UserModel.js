const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  Role: {
    type: String,
    enum: ["admin", "user"],
    default: ["user"],
  },
});

module.exports = mongoose.model("AuthUser1", UserSchema);

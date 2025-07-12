const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firebaseId: String,
  name: String,
  email: String,
  profilePic: String,
  calorieTarget: {
    type: Number,
    default: 2000
  }
});

module.exports = mongoose.model("User", userSchema);
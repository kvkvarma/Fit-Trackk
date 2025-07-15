const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    firebaseId: String,
    date: String,
    targetMet:Boolean
});

exports = mongoose.model("Activity", activitySchema);

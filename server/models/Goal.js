const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    firebaseId:String,
    calorieTarget:Number,
    proteinTarget:Number,
    carbsTarget:Number,
    fatsTarget:Number,
    weightTarget:Number,
    hydrationTarget:Number
});

module.exports = mongoose.model('Goal', goalSchema);


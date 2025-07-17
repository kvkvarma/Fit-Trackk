const express = require("express");
const router = express.Router();
const Goal = require("../models/Goal");

router.post("/setgoal", async (req, res) => {
    try {
        const { firebaseId, calories, protein, carbs, fats, weight, hydration } = req.body;
        console.log(firebaseId,calories, protein, carbs, fats, weight, hydration);
        const goal = await Goal.findOneAndUpdate(
            { firebaseId },
            { calorieTarget: calories, proteinTarget: protein, carbsTarget: carbs, fatsTarget: fats, weightTarget: weight, hydrationTarget: hydration },
            { new: true, upsert: true }
        );
        res.status(200).json({ success: true, goal });
    } catch (err) {
        console.error("Error setting goal:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
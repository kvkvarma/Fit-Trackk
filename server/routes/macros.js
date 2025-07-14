const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/macros", async (req, res) => {
  const { food } = req.body;

  try {
    const response = await axios.post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      { query: food },
      {
        headers: {
          "x-app-id": process.env.NUTRITIONIX_APP_ID,
          "x-app-key": process.env.NUTRITIONIX_APP_KEY,
          "content-type": "application/json"
        }
      }
    );
    // console.log(response.data);
    const data = response.data.foods[0];
    // console.log(data)
    res.status(200).json({
      name: data.food_name,
      calories: data.nf_calories,
      protein: data.nf_protein,
      carbs: data.nf_total_carbohydrate,
      fat: data.nf_total_fat
    });
  } catch (err) {
    console.error("Macro API Error:", err.response?.data || err.message);
    res.status(500).json({ message: "Unable to fetch macros" });
  }
});

module.exports = router;

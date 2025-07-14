// routes/bmi.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/calculate", async (req, res) => {
  const { weight, height } = req.body;

  try {
    const response = await axios.get("https://api.apiverve.com/v1/bmicalculator", {
      params: { weight, height, unit: "metric" },
      headers: {
        "x-api-key": process.env.API_KEY, // Use the API key from .env
      },
    }); 

    res.status(200).json({ success: true, bmiData: response.data });
  } catch (err) {
    console.error("BMI API Error:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "Error calculating BMI" });
  }
});

module.exports = router;

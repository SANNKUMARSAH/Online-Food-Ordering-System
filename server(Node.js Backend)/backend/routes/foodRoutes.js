const express = require("express");
const Food = require("../models/Food");

const router = express.Router();


// ================= ADD FOOD =================

router.post("/add", async (req, res) => {
  try {
    const { name, category, price, image } = req.body;

    const food = await Food.create({
      name,
      category,
      price,
      image,
    });

    res.status(201).json({
      message: "Food Added Successfully ✅",
      food,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ================= GET ALL FOODS =================

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json(foods);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
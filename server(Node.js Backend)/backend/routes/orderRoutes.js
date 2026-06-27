const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// ================= CREATE ORDER =================

router.post("/create", async (req, res) => {
  try {
    const { userId, foods, totalPrice } = req.body;

    const order = await Order.create({
      userId,
      foods,
      totalPrice,
    });

    res.status(201).json({
      message: "Order Placed Successfully ✅",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ================= GET ALL ORDERS =================

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
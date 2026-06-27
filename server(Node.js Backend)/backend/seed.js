require("dotenv").config();
const mongoose = require("mongoose");

const Food = require("./models/Food");

mongoose.connect(process.env.MONGO_URI);

const foods = [
  {
    name: "Cheese Burger",
    category: "Burger",
    price: 199,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    name: "Chicken Biryani",
    category: "Biryani",
    price: 249,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500",
  },
  {
    name: "French Fries",
    category: "Snacks",
    price: 99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
  },
  {
    name: "Cold Drink",
    category: "Drinks",
    price: 59,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",
  },
  {
    name: "Fried Chicken",
    category: "Chicken",
    price: 349,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
  },
];

const importData = async () => {
  try {
    await Food.deleteMany();

    await Food.insertMany(foods);

    console.log("Foods Added Successfully ✅");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
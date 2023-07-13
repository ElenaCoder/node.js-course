const express = require('express');
const router = express.Router();
const Car = require('./models/car');

// Fetch all cars
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars)
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})

module.exports = router;
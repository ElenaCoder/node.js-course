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

// Add car
router.post('/cars', async (req, res) => {
    const car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
    });

    try {
        const newCar = await car.save();
        res.status(201).json({ newCar });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Delete car by brand
router.delete('/cars', async (req, res) => {
    try {
        const result = await Car.deleteMany({ brand: req.body.brand });
        res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Update car by id
router.put('/cars/:id', async (req, res) => {
    try {
        const result = await Car.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
        );
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
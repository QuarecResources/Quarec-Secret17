const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/appointmentSchema");
const Reviews = require("../model/reviews");

// Post User data to the database
router.post("/appointments", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res
      .status(400)
      .json({ message: "Appointment Date, Name and email are required" });
    }
    const user = new User({ name, email, phone });
    await user.save();
    res.status(201).json({ message: "As soon as We Contact with  you" });
  } catch (err) {
    console.log(err);
  }
});

//Post Reviews Data in database
router.post("/reviews", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ message: "Please Fill the Reviews Field." });
    } else {
      const review = new Reviews({ name, email, phone, message });
      await review.save();

      res.status(201).json({ message: "Thank you for your reviews" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

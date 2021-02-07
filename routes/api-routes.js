const router = require("express").Router();
const Workout = require("../models/workouts");

router.get("/api/workouts", (req, res) => {
  console.log("hello workouts");
});

module.exports = router;

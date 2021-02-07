const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Enter date",
  },
  exercises: {
    type: {
      type: String,
      trim: true,
      required: "Enter workout type (resistance or cardio)",
    },
    name: {
      type: String,
      trim: true,
      required: "Enter workout name",
    },
    duration: {
      type: Number,
      required: "Enter the duration of workout",
    },
    weight: {
      type: Number,
      required: "Enter the weight (BW if cardio)",
    },
    reps: {
      type: Number,
      required: "Enter the number of reps",
    },
    sets: {
      type: Number,
      required: "Enter the number of sets",
    },
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

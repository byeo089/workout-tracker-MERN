const mongoose = require("mongoose");

// make schema that forces a validation structure
const Schema = mongoose.Schema;

//validation schema
const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

//make model based on the schema in workout.js
module.exports = mongoose.model("Workout", workoutSchema);

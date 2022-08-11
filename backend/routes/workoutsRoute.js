//routes
const express = require("express");

const {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//GET All
router.get("/", getWorkouts);

//GET by ID
router.get("/:id", getWorkout);

//POST (Add)
router.post("/", createWorkout);

//PUT (DELETE)
router.delete("/:id", deleteWorkout);

//PATCH (update)
router.patch("/:id", updateWorkout);

//export route module
module.exports = router;

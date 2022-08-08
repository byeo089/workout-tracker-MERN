require("dotenv").config();

//first, run "npm install expr"
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//Middleware
app.use(express.json());

app.use((req, res, next) => {
	//Next is similar to a .then()
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests in Port4000
		app.listen(process.env.PORT, () => {
			console.log(
				"connected to dbo & listening on Port",
				process.env.PORT
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});

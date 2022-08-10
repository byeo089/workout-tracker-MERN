const express = require("express");

//controller function
const { loginUser, registerUser } = require("../controllers/userController");

const router = express.Router(); //create instance of Router

//login route
router.post("/login", loginUser);

//register route
router.post("/register", registerUser);

module.exports = router;

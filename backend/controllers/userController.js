const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
	return jwt.sign({ _id: id }, process.env.secret, { expiresIn: "2d" });
};

//login user
const loginUser = async (req, res) => {
	res.json({ msg: "login user" });
};

//register user
const registerUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.register(email, password);

		//create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { loginUser, registerUser };

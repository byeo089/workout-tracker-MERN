const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

//create static "register" method
userSchema.statics.register = async function (email, password) {
	//validation - fields, emails, password
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error(
			"Password is not strong enough. Must contain at least 1 uppercase, number, and symbol characters"
		);
	}

	const exists = await this.findOne({ email });

	//if exists has a value, notify the existence of an email
	if (exists) {
		throw Error("Email already in use");
	}

	//create salt and hash
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return user;
};

module.exports = mongoose.model("User", userSchema);

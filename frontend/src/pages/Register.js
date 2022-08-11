import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(email, password);
	};

	return (
		<form className="register" onSubmit={handleSubmit}>
			<h3>Register</h3>
			<label>Email:</label>
			<input
				type="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				value={email}
			></input>
			<label>Password:</label>
			<input
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				value={password}
			></input>
			<button>Register</button>
		</form>
	);
};

export default Register;

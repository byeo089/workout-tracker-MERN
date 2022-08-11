import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { register, error, isLoading } = useRegister();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await register(email, password);

		// console.log(email, password);
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
			<button disabled={isLoading}>Register</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default Register;

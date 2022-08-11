import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	const { user } = useAuthContext();

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />

				<div className="pages">
					<Routes>
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						></Route>
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						></Route>
						<Route
							path="/register"
							element={!user ? <Register /> : <Navigate to="/" />}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />

				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

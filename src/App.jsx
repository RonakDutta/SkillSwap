import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<AppLayout />}></Route>
			</Routes>
		</div>
	);
}

export default App;

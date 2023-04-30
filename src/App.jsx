import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Bookmark from "./Pages/Bookmark"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bookmarks" element={<Bookmark />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
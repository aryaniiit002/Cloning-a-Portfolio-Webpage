import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Portfolio from "./components/Portfolio/Portfolio";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/portfolio" element={<Portfolio />} />
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	)
}

export default App;

import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
	return (
		<div className='App'>
			<Suspense fallback={''}>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			</Suspense>
		</div>
	)
}

export default App

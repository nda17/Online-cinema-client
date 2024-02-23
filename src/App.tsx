import { Route, Routes } from 'react-router-dom'
import Layout from './app/components/layout/Layout.tsx'
import Home from './app/components/screens/home/Home.tsx'
import './globals.scss'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App


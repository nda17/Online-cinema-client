import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './app/components/layout/Layout.tsx'
import './globals.scss'

const Home = lazy(() => import('./app/components/screens/home/Home.tsx'))

const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App


import Layout from '@components/layout/Layout.tsx'
import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './globals.scss'

const Home = lazy(() => import('@screens/home/Home.tsx'))

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

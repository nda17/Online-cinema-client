import Home from '@/components/screens/home/Home'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Home | Online-Cinema',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser.'
}

const HomePage: FC = () => {
	return <Home />
}

export default HomePage

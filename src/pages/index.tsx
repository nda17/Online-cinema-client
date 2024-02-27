'use client'
import '@/assets/styles/globals.scss'
import MainProvider from '@/providers/MainProvider'
import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'
import { NextPage } from 'next'

const HomePage: NextPage<IHome> = () => {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}

export default HomePage

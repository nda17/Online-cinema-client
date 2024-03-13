'use client'
import MainProvider from '@/providers/MainProvider'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { mainMenu } from './DataMenu/mainMenu.data'
import { userMenu } from './DataMenu/userMenu.data'
import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
const DynamicMenu = dynamic(() => import('./Menu'), { ssr: false })

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={mainMenu} />
			<MainProvider>
				<GenreMenu />
				<DynamicMenu menu={userMenu} />
			</MainProvider>
		</>
	)
}

export default MenuContainer

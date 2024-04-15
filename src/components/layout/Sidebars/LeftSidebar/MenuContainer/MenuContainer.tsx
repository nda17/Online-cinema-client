'use client'
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
			<GenreMenu />
			<DynamicMenu menu={userMenu} />
		</>
	)
}

export default MenuContainer

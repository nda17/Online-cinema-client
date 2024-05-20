'use client'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Menu from './Menu/Menu'
import { mainMenu } from './Menu/data/main-menu.data'
import styles from './MenuContainer.module.scss'
import PopularGenres from './PopularGenres/PopularGenres'
const DynamicGeneral = dynamic(() => import('./General/General'), { ssr: false })

const MenuContainer: FC = () => {
	return (
		<>	
			<>
				<h1 className={styles.heading}>Menu</h1>
				<Menu mainMenu={mainMenu} />
			</>
			<>
				<h1 className={styles.heading}>Popular genres</h1>
				<PopularGenres />
			</>
			<DynamicGeneral />
		</>
	)
}

export default MenuContainer

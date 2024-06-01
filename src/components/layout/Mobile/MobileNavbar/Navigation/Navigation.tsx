'use client'
import { useAuth } from '@/hooks/useAuth'
import FavoritesMenu from '@/ui/favorites-menu/FavoritesMenu'
import Hamburger from '@/ui/hamburger/Hamburger'
import { FC } from 'react'
import Logo from './Logo/Logo'
import styles from './Navigation.module.scss'
import SearchContainer from './SearchContainer/SearchContainer'

const Navigation: FC = () => {
	const { user } = useAuth()

	return (
		<header className={styles.navigation}>
			<Hamburger />
			<div className={styles.center}>
				<Logo />
				<SearchContainer />
			</div>
			{user && <FavoritesMenu />}
		</header>
	)
}

export default Navigation

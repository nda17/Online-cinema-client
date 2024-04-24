'use client'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import FavoritesMenuContainer from './FavoritesMenuContainer/FavoritesMenuContainer'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './MobileNavbar.module.scss'
import Navigation from './Navigation/Navigation'

const MobileNavbar: FC = () => {
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const visibleFavorites = useSelector(
		(state: any) => state.favoritesMenu.visible
	)

	return (
		<section>
			<Navigation />
			{visibleHamburger && (
				<div className={styles.menu}>
					<MenuContainer />
				</div>
			)}

			{visibleFavorites && (
				<div className={styles.menu}>
					<FavoritesMenuContainer />
				</div>
			)}
		</section>
	)
}

export default MobileNavbar

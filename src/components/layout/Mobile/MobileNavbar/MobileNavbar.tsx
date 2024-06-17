'use client'
import VeilBackground from '@/components/ui/veil-background/VeilBackground'
import { useClickOutside } from '@/hooks/useClickOutside'
import Favorites from '@/screens/favorites/Favorites'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import { FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

	const dispatch = useDispatch()
	const closeMenu = () => {
		dispatch(setVisibleHamburger(false))
		dispatch(setVisibleFavorites(false))
	}

	const menuRef = useRef(null)
	useClickOutside(menuRef, closeMenu)

	return (
		<section className={styles.navbar}>
			<Navigation />
			{visibleHamburger && (
				<>
					<VeilBackground />
					<div className={styles.mainMenu} ref={menuRef}>
						<MenuContainer />
					</div>
				</>
			)}

			{visibleFavorites && (
				<>
					<VeilBackground />
					<div className={styles.favoritesMenu} ref={menuRef}>
						<Favorites device="mobile" />
					</div>
				</>
			)}
		</section>
	)
}

export default MobileNavbar

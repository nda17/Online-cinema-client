'use client'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import ExtraMenuContainer from './ExtraMenuContainer/ExtraMenuContainer'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './MobileNavbar.module.scss'
import Navigation from './Navigation/Navigation'

const MobileNavbar: FC = () => {
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const visibleExtra = useSelector((state: any) => state.extraMenu.visible)

	return (
		<section>
			<Navigation />
			{visibleHamburger && (
				<div className={styles.menu}>
					<MenuContainer />
				</div>
			)}

			{visibleExtra && (
				<div className={styles.menu}>
					<ExtraMenuContainer />
				</div>
			)}
		</section>
	)
}

export default MobileNavbar

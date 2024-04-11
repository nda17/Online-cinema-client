'use client'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import ExtraMenuContainer from './ExtraMenuContainer/ExtraMenuContainer'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Mobile.module.scss'
import Navigation from './Navigation/Navigation'

const Mobile: FC = () => {
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const visibleExtra = useSelector((state: any) => state.extraMenu.visible)

	return (
		<section>
			<Navigation />
			{visibleHamburger && (
				<section className={styles.menu}>
					<MenuContainer />
				</section>
			)}
			
			{visibleExtra && (
				<section className={styles.menu}>
					<ExtraMenuContainer />
				</section>
			)}
		</section>
	)
}

export default Mobile

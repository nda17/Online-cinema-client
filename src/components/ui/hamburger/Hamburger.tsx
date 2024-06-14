'use client'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './Hamburger.module.scss'

const Hamburger: FC = () => {
	const visibleFavorites = useSelector(
		(state: any) => state.favoritesMenu.visible
	)
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const dispatch = useDispatch()

	const changeMenu = () => {
		dispatch(setVisibleHamburger(!visibleHamburger))
	}

	return (
		<div
			className={styles.hamburger}
			onClick={() => {
				if (visibleFavorites) {
					dispatch(setVisibleFavorites(!visibleFavorites))
				}
				changeMenu()
			}}
		>
			{visibleHamburger ? (
				<MaterialIcon name={'MdClose'} fill="#fc0303" />
			) : (
				<MaterialIcon name={'MdMenu'} />
			)}
		</div>
	)
}

export default Hamburger

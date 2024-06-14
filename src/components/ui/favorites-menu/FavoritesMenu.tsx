'use client'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './FavoritesMenu.module.scss'

const FavoritesMenu: FC = () => {
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const visibleFavorites = useSelector(
		(state: any) => state.favoritesMenu.visible
	)
	const dispatch = useDispatch()

	const changeMenu = () => {
		dispatch(setVisibleFavorites(!visibleFavorites))
	}

	return (
		<div
			className={styles.menu}
			onClick={() => {
				if (visibleHamburger) {
					dispatch(setVisibleHamburger(!visibleHamburger))
				}
				changeMenu()
			}}
		>
			{visibleFavorites ? (
				<MaterialIcon name={'MdClose'} fill="#fc0303" />
			) : (
				<MaterialIcon name={'MdStar'} fill="#f5c521" />
			)}
		</div>
	)
}

export default FavoritesMenu

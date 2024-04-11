'use client'
import { setVisibleExtra } from '@/store/extra-menu/extra-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './ExtraMenu.module.scss'

const ExtraMenu: FC = () => {
	const visibleHamburger = useSelector(
		(state: any) => state.hamburger.visible
	)
	const visibleExtra = useSelector((state: any) => state.extraMenu.visible)
	const dispatch = useDispatch()

	const changeMenu = () => {
		dispatch(setVisibleExtra(!visibleExtra))
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
			{visibleExtra ? (
				<MaterialIcon name={'MdOutlineKeyboardArrowUp'} />
			) : (
				<MaterialIcon name={'MdApps'} />
			)}
		</div>
	)
}

export default ExtraMenu

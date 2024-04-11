'use client'
import { setVisibleExtra } from '@/store/extra-menu/extra-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './Hamburger.module.scss'

const Hamburger: FC = () => {
	const visibleExtra = useSelector((state: any) => state.extraMenu.visible)
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
				if (visibleExtra) {
					dispatch(setVisibleExtra(!visibleExtra))
				}
				changeMenu()
			}}
		>
			{visibleHamburger ? (
				<MaterialIcon name={'MdClose'} />
			) : (
				<MaterialIcon name={'MdMenu'} />
			)}
		</div>
	)
}

export default Hamburger

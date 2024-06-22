'use client'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Menu from './Menu/Menu'
import { mainMenu } from './Menu/data/main-menu.data'
import styles from './MenuContainer.module.scss'
import PopularGenres from './PopularGenres/PopularGenres'
const DynamicGeneral = dynamic(() => import('./General/General'), {
	loading: () => <SkeletonLoader count={2} className={'h-7 pt-6 mb-6'} />,
	ssr: false
})

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
			<>
				<h1 className={styles.heading}>General</h1>
				<DynamicGeneral />
			</>
		</>
	)
}

export default MenuContainer

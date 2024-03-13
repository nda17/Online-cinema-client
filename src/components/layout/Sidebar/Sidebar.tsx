'use client'
import MainProvider from '@/providers/MainProvider/MainProvider'
import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'
import SearchContainer from './SearchContainer/SearchContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebarWrapper}>
			<MainProvider>
				<SearchContainer />
				<MoviesContainer />
			</MainProvider>
		</div>
	)
}

export default Sidebar

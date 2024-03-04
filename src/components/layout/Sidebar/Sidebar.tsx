'use client'
import MainProvider from '@/providers/MainProvider'
import { FC } from 'react'
import SearchContainer from './SearchContainer/SearchContainer'
import styles from './Sidebar.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

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

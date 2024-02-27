import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'
import SearchContainer from './SearchContainer/SearchContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.wrapperSidebar}>
			<SearchContainer />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar

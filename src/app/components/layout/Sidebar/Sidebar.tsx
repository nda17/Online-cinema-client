import { FC } from 'react'
import SearchContainer from './SearchContainer/SearchContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.wrapperSidebar}>
			<SearchContainer />
			{/* TODO: movies container */}
		</div>
	)
}

export default Sidebar

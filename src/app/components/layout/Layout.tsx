import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>
				<Outlet />
			</div>
			<Sidebar />
		</div>
	)
}

export default Layout
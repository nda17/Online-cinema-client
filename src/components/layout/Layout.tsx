import { FC } from 'react'

import { ILayout } from '@/components/layout/layout.interface'
import ProgressBarLoader from '../ui/progress-bar-loader/ProgressBarLoader'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<ProgressBarLoader />
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>{children}</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout

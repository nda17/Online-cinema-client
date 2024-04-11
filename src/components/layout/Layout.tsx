import { ILayout } from '@/components/layout/layout.interface'
import ProgressBarLoader from '@/ui/progress-bar-loader/ProgressBarLoader'
import { FC } from 'react'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<ProgressBarLoader />
			<div className={styles.layout}>
				<Navigation />
				<main className={styles.main}>{children}</main>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout

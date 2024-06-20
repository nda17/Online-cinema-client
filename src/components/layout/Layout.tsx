import { ILayout } from '@/components/layout/layout.interface'
import ProgressBarLoader from '@/ui/progress-bar-loader/ProgressBarLoader'
import { FC } from 'react'
import styles from './Layout.module.scss'
import MobileNavbar from './Mobile/MobileNavbar/MobileNavbar'
import LeftSidebar from './Sidebars/LeftSidebar/LeftSidebar'
import RightSidebar from './Sidebars/RightSidebar/RightSidebar'
import Footer from './footer/Footer'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<ProgressBarLoader />
			<div className={styles.layout}>
				<div className={styles.leftSidebar}>
					<LeftSidebar />
				</div>
				<div className={styles.content}>
					<main className={styles.main}>
						<div className={styles.navbar}>
							<MobileNavbar />
						</div>
						{children}
					</main>
					<Footer />
				</div>
				<div className={styles.rightSidebar}>
					<RightSidebar />
				</div>
			</div>
		</>
	)
}

export default Layout

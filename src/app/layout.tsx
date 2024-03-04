'use client'
import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.scss'
import { ILayout } from './layout.interface'
import styles from './layout.module.scss'

// export const metadata: Metadata = {
//   title: "Watch movies online",
//   description: "Watch MovieApp movies and TV shows online or stream right to your browser.",
// };

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./" sizes="any" />
			</head>
			<body>
				<div className={styles.layout}>
					<QueryClientProvider client={queryClient}>
						<Navigation />
						<div className={styles.center}>{children}</div>
						<Sidebar />
					</QueryClientProvider>
				</div>
			</body>
		</html>
	)
}

export default Layout

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { Outfit } from 'next/font/google'
import { FC } from 'react'
import './globals.scss'
import { ILayout } from './layout.interface'
import styles from './layout.module.scss'

const font = Outfit({
	subsets: ['latin'],
	weight: '400',
	display: 'fallback',
	style: 'normal'
})

const RootLayout: FC<ILayout> = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./" sizes="any" />
			</head>
			<body className={font.className}>
				<div className={styles.layout}>
					<Navigation />
					<div className={styles.center}>{children}</div>
					<Sidebar />
				</div>
			</body>
		</html>
	)
}

export default RootLayout

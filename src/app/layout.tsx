import '@/assets/styles/globals.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from '@/providers/MainProvider/MainProvider'
import { IRootLayout } from '@/shared/types/root-layout.types'
import { Outfit } from 'next/font/google'
import { FC } from 'react'

const font = Outfit({
	subsets: ['latin'],
	weight: '400',
	display: 'fallback',
	style: 'normal'
})

const RootLayout: FC<IRootLayout> = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./" sizes="any" />
			</head>
			<body className={font.className}>
				<MainProvider>
					<Layout>{children}</Layout>
				</MainProvider>
			</body>
		</html>
	)
}

export default RootLayout

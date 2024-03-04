import logoImage from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logoWrapper}>
			<Image
				src={logoImage}
				width={40}
				height={40}
				className={styles.logo}
				alt="Online cinema app"
				draggable={false}
			/>
			<p className={styles.text}>Online-Cinema</p>
		</Link>
	)
}

export default Logo

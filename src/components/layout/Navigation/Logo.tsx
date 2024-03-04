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
			<div className={styles.textWrapper}>
				<p className={styles.text}>
					<span>
						O<span>nline</span>
					</span>
				</p>
				<p className={styles.text}>
					<span>
						C<span>inema</span>
					</span>
				</p>
			</div>
		</Link>
	)
}

export default Logo

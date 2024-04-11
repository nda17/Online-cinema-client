import logoImage from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			<Image
				src={logoImage}
				width={40}
				height={40}
				style={{ width: 40, height: 40 }}
				alt="Online cinema app"
				draggable={false}
				priority={true}
			/>
			<div className={styles.text}>
				<p>
					O<span>nline</span>
				</p>
				<p>
					C<span>inema</span>
				</p>
			</div>
		</Link>
	)
}

export default Logo

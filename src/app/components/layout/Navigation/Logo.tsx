import logoImage from '@/app/assets/images/logo.svg'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link to="/" className={styles.logoWrapper}>
			<img
				className={styles.logo}
				src={logoImage}
				alt="Online cinema"
				draggable={false}
			/>
			<p>Online-Cinema</p>
		</Link>
	)
}

export default Logo

import { getAdminHomeUrl } from '@/configs/url.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC = () => {
	return (
		<Link href={getAdminHomeUrl()} className={styles.button}>
			Sign in
		</Link>
	)
}

export default AuthButton

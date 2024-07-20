import { getAuthUrl } from '@/configs/api.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC = () => {
	return (
		<Link href={getAuthUrl(``)} className={styles.button}>
			Sign in
		</Link>
	)
}

export default AuthButton

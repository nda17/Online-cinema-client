import { PUBLIC_URL } from '@/configs/url.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link
			href={`/auth?redirect=${PUBLIC_URL.moviesUrl(slug)}`}
			className={styles.button}
		>
			Sign in
		</Link>
	)
}

export default AuthButton

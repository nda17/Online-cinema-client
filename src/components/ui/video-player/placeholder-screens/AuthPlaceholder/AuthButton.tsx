import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link
			href={`/auth?redirect=/${PUBLIC_PAGES.MOVIES}/${slug}}`}
			className={styles.button}
		>
			Sign in
		</Link>
	)
}

export default AuthButton

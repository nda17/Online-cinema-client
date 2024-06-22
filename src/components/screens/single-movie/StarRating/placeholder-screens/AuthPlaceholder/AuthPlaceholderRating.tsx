import { FC } from 'react'
import styles from './AuthPlaceholderRating.module.scss'

const AuthPlaceholderRating: FC = () => {
	return (
		<div className={styles.placeholder}>
			<p>Login to rate the film</p>
		</div>
	)
}

export default AuthPlaceholderRating

import { FC } from 'react'
import styles from './ConfirmEmailPlaceholderRating.module.scss'

const ConfirmEmailPlaceholderRating: FC = () => {
	return (
		<div className={styles.placeholder}>
			<p>Confirm your email to rate the film</p>
		</div>
	)
}

export default ConfirmEmailPlaceholderRating

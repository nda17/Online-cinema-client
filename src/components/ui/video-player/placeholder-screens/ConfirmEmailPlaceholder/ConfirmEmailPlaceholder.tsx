import { FC } from 'react'
import styles from './ConfirmEmailPlaceholder.module.scss'

const ConfirmEmailPlaceholder: FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>
					To watch the film, confirm your Email. A confirmation link was
					sent to your email during registration.
				</div>
			</div>
		</div>
	)
}

export default ConfirmEmailPlaceholder

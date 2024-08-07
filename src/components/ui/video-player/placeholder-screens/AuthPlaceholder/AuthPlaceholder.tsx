import { FC } from 'react'
import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>You must be logged in to start watching</div>
				<AuthButton />
			</div>
		</div>
	)
}

export default AuthPlaceholder

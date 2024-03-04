import { FC } from 'react'
import styles from './SpinnerLoader.module.scss'

const SpinnerLoader: FC = () => {
	return (
		<div className={styles.spinnerWrapper}>
			<span className={styles.spinner}></span>
		</div>
	)
}

export default SpinnerLoader

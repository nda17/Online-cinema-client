import { FC } from 'react'
import styles from './SpinnerLoader.module.scss'

const SpinnerLoader: FC = () => {
	return (
		<div className={styles.spinner}>
			<span></span>
		</div>
	)
}

export default SpinnerLoader

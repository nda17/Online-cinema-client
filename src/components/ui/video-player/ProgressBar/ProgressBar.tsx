import { FC } from 'react'
import styles from './ProgressBar.module.scss'
import { IProgress } from './progress-bar.interface'

const ProgressBar: FC<IProgress> = ({ min, max, value, onChange }) => {
	return (
		<input
			min={min}
			max={max}
			value={value}
			onChange={onChange}
			type="range"
			className={styles.progressBar}
		/>
	)
}

export default ProgressBar

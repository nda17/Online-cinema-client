import { FC } from 'react'
import styles from './SpinnerLoader.module.scss'

const SpinnerLoader: FC = () => {
	return (
<div className={styles.spinnerLoader}>
  <div className={styles.loader}>
      <p className={styles.text}>Please wait</p>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
  </div>
</div>
	)
}

export default SpinnerLoader

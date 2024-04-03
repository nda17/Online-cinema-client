import { FC } from 'react'
import Heading from '../heading/Heading'
import styles from './AlertPopup.module.scss'
import { IAlertPopup } from './alert-popup.interface'

const AlertPopup: FC<IAlertPopup> = ({ removeHandler, closePopup }) => {
	return (
		<section className={styles.wrapper}>
			<div>
				<div>
					<Heading title="Are you sure ?" />
					<span>
						The data will be deleted without the possibility of recovery.
					</span>
					<div className={styles.buttons}>
						<button type="button" onClick={removeHandler}>
							Delete
						</button>
						<button type="button" onClick={closePopup}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AlertPopup

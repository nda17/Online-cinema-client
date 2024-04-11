import { useClickOutside } from '@/hooks/useClickOutside'
import { setVisible } from '@/store/popup/popup.slice'
import { FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../heading/Heading'
import styles from './AlertPopup.module.scss'
import { IAlertPopup } from './alert-popup.interface'

const AlertPopup: FC<IAlertPopup> = ({ removeHandler }) => {
	const visible = useSelector((state: any) => state.popup.visible)
	const text = useSelector((state: any) => state.popup.text)
	const idItem = useSelector((state: any) => state.popup.itemId)
	const popupRef = useRef(null)

	const dispatch = useDispatch()

	const closePopup = () => {
		dispatch(setVisible(false))
	}

	useClickOutside(popupRef, () => closePopup())

	return (
		visible && (
			<div className={styles.alert} ref={popupRef}>
				<div>
					<Heading title="Are you sure ?" />
					<span>{text}</span>
					<div className={styles.buttons}>
						<button
							type="button"
							onClick={() => {
								removeHandler(idItem)
								closePopup()
							}}
						>
							Delete
						</button>
						<button type="button" onClick={closePopup}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		)
	)
}

export default AlertPopup

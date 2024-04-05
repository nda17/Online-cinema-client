import AlertPopup from '@/components/ui/alert-popup/AlertPopup'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './AdminActions.module.scss'
import { IAdminActions } from './admin-actions.interface'

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const [popupIsVisible, setPopupVisible] = useState(false)
	const { push } = useRouter()

	const closePopup = () => {
		setPopupVisible(false)
	}

	return (
		<>
			{popupIsVisible && (
				<AlertPopup
					removeHandler={removeHandler}
					closePopup={closePopup}
				/>
			)}
			<div className={styles.actions}>
				<button onClick={() => push(editUrl)}>
					<MaterialIcon name="MdEdit" />
				</button>
				<button
					onClick={() => {
						setPopupVisible(true)
					}}
				>
					<MaterialIcon name="MdClose" />
				</button>
			</div>
		</>
	)
}

export default AdminActions

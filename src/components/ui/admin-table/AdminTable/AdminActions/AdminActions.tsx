import AlertPopup from '@/components/ui/alert-popup/AlertPopup'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './AdminActions.module.scss'
import { IAdminActions } from './admin-actions.interface'

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const [statusPopup, setStatusPopup] = useState(false)
	const { push } = useRouter()

	const closePopup = () => {
		setStatusPopup(false)
	}

	return (
		<>
			{statusPopup && (
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
						setStatusPopup(true)
					}}
				>
					<MaterialIcon name="MdClose" />
				</button>
			</div>
		</>
	)
}

export default AdminActions

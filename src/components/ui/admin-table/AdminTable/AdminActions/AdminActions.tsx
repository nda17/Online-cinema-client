import { setItemId, setText, setVisible } from '@/store/popup/popup.slice'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './AdminActions.module.scss'
import { IAdminActions } from './admin-actions.interface'

const AdminActions: FC<IAdminActions> = ({ editUrl, itemId }) => {
	const { push } = useRouter()
	const dispatch = useDispatch()

	const openPopup = () => {
		dispatch(setVisible(true))
		dispatch(
			setText(
				'The data will be deleted without the possibility of recovery.'
			)
		)
		dispatch(setItemId(itemId))
	}

	return (
		<>
			<div className={styles.actions}>
				<button onClick={() => push(editUrl)}>
					<MaterialIcon name="MdEdit" />
				</button>
				<button
					onClick={() => {
						openPopup()
					}}
				>
					<MaterialIcon name="MdClose" />
				</button>
			</div>
		</>
	)
}

export default AdminActions

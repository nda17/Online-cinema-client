import { FC } from 'react'
import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from './admin-table.interface'

const AdminTableItem: FC<IAdminTableItem> = ({
	removeHandler,
	closePopup,
	tableItem
}) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={() => removeHandler(tableItem._id)}
				closePopup={closePopup}
			/>
		</div>
	)
}

export default AdminTableItem

import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from './admin-table.interface'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={uuidv4()}>{value}</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} itemId={tableItem._id} />
		</div>
	)
}

export default AdminTableItem

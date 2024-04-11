import AlertPopup from '@/ui/alert-popup/AlertPopup'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem key={tableItem._id} tableItem={tableItem} />
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
			<AlertPopup removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTable

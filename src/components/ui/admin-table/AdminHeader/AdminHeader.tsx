import { SearchField } from '@/ui/search-field/SearchField'
import { FC } from 'react'

import AdminCreateButton from '../AdminCreateButton/AdminCreateButton'
import styles from './AdminHeader.module.scss'
import { IAdminHeader } from './admin-header.interface'

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm,
	handleClear
}) => {
	return (
		<div className={styles.header}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClear={handleClear}
			/>
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader

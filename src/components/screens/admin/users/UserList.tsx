'use client'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'
import { Metadata } from 'next'
import { FC } from 'react'
import { useUsers } from './useUsers'

export const metadata: Metadata = {
	title: 'Admin panel | Users'
}

const UsersList: FC = () => {
	const {
		handleSearch,
		handleClear,
		isLoading,
		searchTerm,
		data,
		deleteAsync
	} = useUsers()

	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="A list of users" />
				<AdminHeader
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					handleClear={handleClear}
				/>
				<AdminTable
					tableItems={data || []}
					headerItems={[
						'Email:',
						'Date register:',
						'Role:',
						'Paid subscription:'
					]}
					isLoading={isLoading}
					removeHandler={deleteAsync}
				/>
			</div>
		</>
	)
}

export default UsersList

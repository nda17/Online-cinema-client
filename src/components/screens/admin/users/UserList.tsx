'use client'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'

import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
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
			<div className={'wrapper'}>
				<Heading title="A list of users" />
				<AdminHeader
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					handleClear={handleClear}
				/>
				<AdminTable
					tableItems={data || []}
					headerItems={['Email:', 'Date register:', 'Admin status:']}
					isLoading={isLoading}
					removeHandler={deleteAsync}
				/>
			</div>
		</>
	)
}

export default UsersList

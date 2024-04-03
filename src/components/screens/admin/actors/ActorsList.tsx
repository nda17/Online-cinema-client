'use client'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'

import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'
import { Metadata } from 'next'
import { FC } from 'react'
import { useActors } from './useActors'

export const metadata: Metadata = {
	title: 'Admin panel | Actors'
}

const ActorsList: FC = () => {
	const {
		handleSearch,
		handleClear,
		isLoading,
		searchTerm,
		data,
		deleteAsync
	} = useActors()

	return (
		<>
			<AdminNavigation />
			<Heading title="A list of actors" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				handleClear={handleClear}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name:', 'Count movies:']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</>
	)
}

export default ActorsList

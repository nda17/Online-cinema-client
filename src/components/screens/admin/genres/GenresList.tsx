'use client'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'
import { Metadata } from 'next'
import { FC } from 'react'
import { useGenres } from './useGenres'

export const metadata: Metadata = {
	title: 'Admin panel | Genres'
}

const GenresList: FC = () => {
	const {
		handleSearch,
		handleClear,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync
	} = useGenres()

	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="A list of genres" />
				<AdminHeader
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					handleClear={handleClear}
					onClick={createAsync}
				/>
				<AdminTable
					tableItems={data || []}
					headerItems={['Name:', 'Slug:']}
					isLoading={isLoading}
					removeHandler={deleteAsync}
				/>
			</div>
		</>
	)
}

export default GenresList

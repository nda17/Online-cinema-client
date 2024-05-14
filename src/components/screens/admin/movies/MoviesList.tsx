'use client'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import Heading from '@/ui/heading/Heading'
import { Metadata } from 'next'
import { FC } from 'react'
import { useMovies } from './useMovies'

export const metadata: Metadata = {
	title: 'Admin panel | Movies'
}

const MoviesList: FC = () => {
	const {
		handleSearch,
		handleClear,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync
	} = useMovies()

	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="A list of movies" />
				<AdminHeader
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					handleClear={handleClear}
					onClick={createAsync}
				/>
				<AdminTable
					tableItems={data || []}
					headerItems={['Title:', 'Genre:', 'Rating:', 'License:']}
					isLoading={isLoading}
					removeHandler={deleteAsync}
				/>
			</div>
		</>
	)
}

export default MoviesList

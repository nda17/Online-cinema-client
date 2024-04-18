'use client'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'

import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
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
		deleteAsync
	} = useMovies()

	return (
		<>
			<AdminNavigation />
			<div className={'wrapper'}>
				<Heading title="A list of movies" />
				<AdminHeader
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					handleClear={handleClear}
				/>
				<AdminTable
					tableItems={data || []}
					headerItems={['Title:', 'Genre:', 'Rating:']}
					isLoading={isLoading}
					removeHandler={deleteAsync}
				/>
			</div>
		</>
	)
}

export default MoviesList

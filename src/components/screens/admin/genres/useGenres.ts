import { ADMIN_PAGES } from '@/configs/pages/admin.config'
import { useDebounce } from '@/hooks/useDebounce'
import { GenreService } from '@/services/genre/genre.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useRouter } from 'next/navigation'
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genre list', debouncedSearch],
		() => GenreService.getGenresList(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: `${ADMIN_PAGES.HOME}/genre/edit/${genre._id}`,
						items: [genre.name, genre.slug]
					})
				),

			onError: (error) => {
				toastrError(error, 'Genre list')
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('')
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.createGenre(),
		{
			onSuccess({ data: _id }) {
				toastr.success('Create genre', 'create was successful')
				push(`${ADMIN_PAGES.HOME}genre/edit/${_id}`)
			},

			onError(error) {
				toastrError(error, 'Create genre')
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onSuccess() {
				toastr.success('Delete genre', 'delete was successful')
				queryData.refetch()
			},

			onError(error) {
				toastrError(error, 'Delete genre')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			handleClear,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}

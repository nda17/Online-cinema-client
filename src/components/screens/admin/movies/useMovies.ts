import { ADMIN_URL } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie/movie.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { getGenresList } from '@/utils/movie/getGenresList'
import { useRouter } from 'next/navigation'
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => MovieService.getMoviesList(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: ADMIN_URL.rootUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
							movie.license
						]
					})
				),

			onError: (error) => {
				toastrError(error, 'Movie list')
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
		'create movie',
		() => MovieService.createMovie(),
		{
			onError(error) {
				toastrError(error, 'Create movie')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create movie', 'create was successful')
				push(ADMIN_URL.rootUrl(`movie/edit/${_id}`))
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError(error) {
				toastrError(error, 'Delete movie')
			},
			onSuccess() {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
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

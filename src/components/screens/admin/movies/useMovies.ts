import { getAdminUrl } from '@/configs/url.config'
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
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating)
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
			onSuccess({ data: _id }) {
				toastr.success('Create movie', 'create was successful')
				push(getAdminUrl(`movie/edit/${_id}`))
			},

			onError(error) {
				toastrError(error, 'Create movie')
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onSuccess() {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
			},

			onError(error) {
				toastrError(error, 'Delete movie')
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

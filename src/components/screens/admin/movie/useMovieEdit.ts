import { ADMIN_PAGES } from '@/configs/pages/admin.config'
import { MovieService } from '@/services/movie/movie.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { getKeys } from '@/utils/object/getKeys'
import { useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IMovieEditInput } from './movie-edit.interface'

export const useMovieEdit = (
	setValue: UseFormSetValue<IMovieEditInput>,
	params: { id: string }
) => {
	const { push } = useRouter()

	const movieId = params.id

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getMovieById(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},

			onError(error) {
				toastrError(error, 'Get movie')
			},
			enabled: !!params.id
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.updateMovie(movieId, data),

		{
			onSuccess() {
				toastr.success('Update movie', 'update was successful')
				push(`${ADMIN_PAGES.HOME}/movies`)
			},

			onError(error) {
				toastrError(error, 'Update movie')
			}
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}

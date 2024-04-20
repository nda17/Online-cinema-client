import { ADMIN_URL } from '@/configs/url.config'
import { GenreService } from '@/services/genre/genre.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { getKeys } from '@/utils/object/getKeys'
import { useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (
	setValue: UseFormSetValue<IGenreEditInput>,
	params: { id: string }
) => {
	const { push } = useRouter()

	const genreId = params.id

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getGenreById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastrError(error, 'Get genre')
			},
			enabled: !!params.id
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.updateGenre(genreId, data),

		{
			onSuccess() {
				toastr.success('Update genre', 'update was successful')
				push(ADMIN_URL.rootUrl('/genres'))
			},
			onError(error) {
				toastrError(error, 'Update genre')
			}
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}

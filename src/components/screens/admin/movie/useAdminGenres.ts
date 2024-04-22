import { GenreService } from '@/services/genre/genre.service'
import { IOption } from '@/ui/select/select-interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useQuery } from 'react-query'

export const useAdminGenres = () => {
	const queryData = useQuery(
		'list of genre',
		() => GenreService.getGenresList(),
		{
			select: ({ data }) =>
				data.map(
					(genre): IOption => ({
						label: genre.name,
						value: genre._id
					})
				),
			onError(error) {
				toastrError(error, 'genre list')
			}
		}
	)

	return queryData
}

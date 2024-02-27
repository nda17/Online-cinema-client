import { GenreService } from '@services/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menuItem.interface'
import { genresUrl } from '@configs/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: genresUrl(genre.slug),
							title: genre.name
						})
					)
					.splice(0, 4)
		}
	)

	return queryData
}

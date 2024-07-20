import { getGenresUrl } from '@/configs/api.config'
import { GenreService } from '@/services/genre/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from './MenuItem/menu-item.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getGenresList(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenresUrl(`/${genre.slug}`),
							title: genre.name
						})
					)
					.splice(0, 4)
		}
	)

	return queryData
}

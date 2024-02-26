import { GenreService } from '@/app/services/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menuItem.interface'

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
							link: `genre/${genre.slug}`,
							title: genre.name
						})
					)
					.splice(0, 4)
		}
	)

	return queryData
}

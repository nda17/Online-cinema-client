import { MovieService } from '@/services/movie/movie.service'
import { FC } from 'react'
import { useQuery } from 'react-query'
import MovieList from '../MovieList'

const PopularMovies: FC = () => {
	const { data } = useQuery(
		'most popular movie in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3)
		}
	)

	return (
		<MovieList
			link="/trending"
			movies={data || []}
			title="Popular Movies"
		/>
	)
}

export default PopularMovies

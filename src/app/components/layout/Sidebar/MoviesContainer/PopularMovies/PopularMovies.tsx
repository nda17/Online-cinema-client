import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { MovieService } from '@/services/movie/movie.service'
import { FC } from 'react'
import { useQuery } from 'react-query'
import MovieList from '../MovieList'
import styles from './PopularMovies.module.scss'

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery(
		'most popular movie in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3)
		}
	)

	return isLoading ? (
		<div className={styles.preloaderWrapper}>
			<SkeletonLoader count={3} className={styles.preloader} />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={data || []}
			title="Popular Movies"
		/>
	)
}

export default PopularMovies

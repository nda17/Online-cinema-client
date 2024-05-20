import { MovieService } from '@/services/movie/movie.service'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import Link from 'next/link'
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

	return (
		<div className={styles.popularMovies}>
			<h1 className={styles.heading}>Popular Movies</h1>
			{isLoading ? (
				<SkeletonLoader count={3} className={styles.preloader} />
			) : (
				<MovieList
					movies={data || []}
				/>
			)}
			<Link href='/trending'>
				<span className={styles.button}>See more</span>
			</Link>
		</div>
	)
}

export default PopularMovies

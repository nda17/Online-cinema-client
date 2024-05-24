'use client'
import { useAuth } from '@/hooks/useAuth'
import { useFavorites } from '@/screens/favorites/useFavorites'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import Link from 'next/link'
import { FC } from 'react'
import MovieList from '../MovieList'
import FavoriteBanner from './FavoriteBanner/FavoriteBanner'
import styles from './FavoriteMovies.module.scss'

const FavoriteMovies: FC = () => {
	const { isLoading, movies } = useFavorites()
	const { user } = useAuth()
	const isAuth = user ? true : false

	return (
		<>
			<h1 className={styles.heading}>Favorites</h1>
			{isLoading ? (
				<SkeletonLoader count={3} className={styles.preloader} />
			) : (!isLoading && !isAuth) || (!isLoading && !movies?.length) ? (
				<FavoriteBanner isAuth={isAuth} />
			) : (
				<>
					<MovieList movies={movies?.slice(0, 3) || []} />
					<Link href="/favorites">
						<span className={styles.button}>See more</span>
					</Link>
				</>
			)}
		</>
	)
}

export default FavoriteMovies

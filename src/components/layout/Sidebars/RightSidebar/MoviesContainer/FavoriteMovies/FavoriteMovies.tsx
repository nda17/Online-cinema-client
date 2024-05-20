'use client'
import { useAuth } from '@/hooks/useAuth'
import { useFavorites } from '@/screens/favorites/useFavorites'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import MovieList from '../MovieList'
import FavoriteBanner from './FavoriteBanner/FavoriteBanner'

const FavoriteMovies: FC = () => {
	const { isLoading, movies } = useFavorites()
	const { user } = useAuth()
	const isAuth = user ? true : false

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		!isLoading && !isAuth || !isLoading && !movies?.length ? (
			<FavoriteBanner isAuth={isAuth} />
		) : (<MovieList
				link='/favorites'
				movies={movies?.slice(0, 3) || []}
				title= 'Favorites'
			/>)
	)
}

export default FavoriteMovies













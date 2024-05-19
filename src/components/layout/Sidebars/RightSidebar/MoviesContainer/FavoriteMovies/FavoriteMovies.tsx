'use client'
import { useAuth } from '@/hooks/useAuth'
import { useFavorites } from '@/screens/favorites/useFavorites'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import MovieList from '../MovieList'
import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovies: FC = () => {
	const { isLoading, movies } = useFavorites()
	const { user } = useAuth()
	
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		!isLoading && !user ? (
			<NotAuthFavorites />
		) : (<MovieList
				link='/favorites'
				movies={movies?.slice(0, 3) || []}
				title= 'Favorites'
			/>)
	)
}

export default FavoriteMovies













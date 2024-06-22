import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import PopularMovies from './PopularMovies/PopularMovies'

const DynamicFavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		loading: () => (
			<SkeletonLoader
				count={3}
				className="h-[10.83rem] lg:h-[5.98rem] mb-4"
			/>
		),
		ssr: false
	}
)

const MoviesContainer: FC = () => {
	return (
		<>
			<PopularMovies />
			<h1 className="text-gray-500 uppercase text-sm font-semibold mb-8">
				Favorites
			</h1>
			<DynamicFavoriteMovies />
		</>
	)
}

export default MoviesContainer

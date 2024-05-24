import dynamic from 'next/dynamic'
import { FC } from 'react'
import PopularMovies from './PopularMovies/PopularMovies'

const DynamicFavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{ ssr: false }
)

const MoviesContainer: FC = () => {
	return (
		<>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</>
	)
}

export default MoviesContainer

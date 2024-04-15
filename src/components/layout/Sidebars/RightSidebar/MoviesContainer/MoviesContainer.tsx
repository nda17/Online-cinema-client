import { FC } from 'react'
import FavoriteMovies from './FavoriteMovies/FavoriteList'
import PopularMovies from './PopularMovies/PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<>
			<PopularMovies />
			<FavoriteMovies />
		</>
	)
}

export default MoviesContainer

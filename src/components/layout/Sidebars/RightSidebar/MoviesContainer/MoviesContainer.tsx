import { FC } from 'react'
import FavoriteMovies from './FavoriteMovies/FavoriteMovies'
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

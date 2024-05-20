import { FC } from 'react'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movieList.interface'

const MovieList: FC<IMovieList> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
		</div>
	)
}

export default MovieList

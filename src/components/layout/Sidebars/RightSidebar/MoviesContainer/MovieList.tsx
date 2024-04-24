import Link from 'next/link'
import { FC } from 'react'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movieList.interface'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<h1 className={styles.heading}>{title}</h1>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<span className={styles.button}>See more</span>
			</Link>
		</div>
	)
}

export default MovieList

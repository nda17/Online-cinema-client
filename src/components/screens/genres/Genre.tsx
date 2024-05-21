import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { IGenrePage } from './genre.interface'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	const title = genre.name
	const description = genre.description

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies
				movies={movies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Genre

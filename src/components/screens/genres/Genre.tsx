import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { IGenres } from './genre.interface'

const Genre: FC<IGenres> = ({ genre, movies }) => {
	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={movies || []}
				title={genre.name}
				description={genre.description}
			/>
		</div>
	)
}

export default Genre

import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { IGenrePage } from './genre.interface'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	const title = genre.name
	const description = genre.description

	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={movies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Genre

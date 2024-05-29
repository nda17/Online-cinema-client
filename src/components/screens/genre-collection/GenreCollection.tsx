import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogGenres from '../templates/catalog-genres/CatalogGenres'
import { IGenreCollectionPage } from './genre-collection.interface'

const GenreCollection: FC<IGenreCollectionPage> = ({ genres }) => {
	const title = 'Genre collection'
	const description =
		'In this section you will find all genres on our site'

	return (
		<div className={styles.contentWrapper}>
			<CatalogGenres
				genres={genres || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default GenreCollection

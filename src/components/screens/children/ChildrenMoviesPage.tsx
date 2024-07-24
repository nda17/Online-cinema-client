import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { IChildrenMoviesPage } from './children-movies.interface'

const ChildrenMoviesPage: FC<IChildrenMoviesPage> = ({
	childrenMovies
}) => {
	const title = 'For children'
	const description =
		'A selection of the best films and cartoons for children'

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies
				movies={childrenMovies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default ChildrenMoviesPage

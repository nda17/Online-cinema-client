import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { IAmericanMoviesPage } from './americanMovies.interface'

const AmericanMoviesPage: FC<IAmericanMoviesPage> = ({
	americanMovies
}) => {
	const title = 'American blockbusters'
	const description = 'A selection of the best films produced in the USA'

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies
				movies={americanMovies || []}
				title={title}
				description={description}
				favorite={true}
			/>
		</div>
	)
}

export default AmericanMoviesPage

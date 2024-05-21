import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { ITrendingPage } from './trending.interface'

const Trending: FC<ITrendingPage> = (content) => {
	const movies = content.movies

	const title = 'Trending movies'
	const description =
		'Trending movies in excellent quality: legal, safe, without advertising'

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

export default Trending

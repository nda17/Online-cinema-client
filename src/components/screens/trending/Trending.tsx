import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { ITrending } from './trending.interface'

const Trending: FC<ITrending> = (content) => {
	const movies = content.movies

	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={movies || []}
				title="Trending movies"
				description="Trending movies in excellent quality: legal, safe, without advertising"
			/>
		</div>
	)
}

export default Trending

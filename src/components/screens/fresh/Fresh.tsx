import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { IFresh } from './fresh.interface'

const Fresh: FC<IFresh> = (content) => {
	const movies = content.movies

	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={movies || []}
				title="Fresh movies"
				description="New movies and series in excellent quality: legal, safe, without advertising"
			/>
		</div>
	)
}

export default Fresh

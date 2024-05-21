import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { IFreshPage } from './fresh.interface'

const Fresh: FC<IFreshPage> = (content) => {
	const movies = content.movies

	const title = 'Fresh movies'
	const description =
		'New movies and series in excellent quality: legal, safe, without advertising'

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

export default Fresh

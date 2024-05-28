import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { IFreshPage } from './fresh.interface'

const Fresh: FC<IFreshPage> = ({ freshMovies }) => {
	const title = 'Fresh movies'
	const description =
		'New movies and series in excellent quality: legal, safe, without advertising'

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies
				movies={freshMovies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Fresh

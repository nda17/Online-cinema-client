import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { IActorPage } from './actor.interface'

const Actor: FC<IActorPage> = ({ actor, movies }) => {
	const title = actor.name

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies movies={movies || []} title={title} />
		</div>
	)
}

export default Actor

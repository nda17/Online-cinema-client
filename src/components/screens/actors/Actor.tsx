import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { IActorPage } from './actor.interface'

const Actor: FC<IActorPage> = ({ actor, movies }) => {
	return (
		<div className={styles.contentWrapper}>
			<Catalog movies={movies || []} title={actor.name} />
		</div>
	)
}

export default Actor

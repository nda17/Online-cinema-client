import classNames from 'classnames'
import { FC } from 'react'
import styles from './FavoritesMenu.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const FavoritesMenuContainer: FC = () => {
	return (
		<section className={classNames('wrapper', styles.menu)}>
			<MoviesContainer />
		</section>
	)
}

export default FavoritesMenuContainer

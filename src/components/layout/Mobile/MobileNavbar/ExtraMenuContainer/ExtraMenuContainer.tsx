import classNames from 'classnames'
import { FC } from 'react'
import styles from './ExtraMenu.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const ExtraMenuContainer: FC = () => {
	return (
		<section className={classNames('wrapper', styles.menu)}>
			<MoviesContainer />
		</section>
	)
}

export default ExtraMenuContainer

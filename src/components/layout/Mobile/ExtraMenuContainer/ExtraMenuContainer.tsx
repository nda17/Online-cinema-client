import { FC } from 'react'
import styles from './ExtraMenu.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const ExtraMenuContainer: FC = () => {
	return (
		<section className={styles.menu}>
			<MoviesContainer />
		</section>
	)
}

export default ExtraMenuContainer

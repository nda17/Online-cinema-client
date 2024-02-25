import SkeletonLoader from '@ui/skeleton-loader/SkeletonLoader'
import Menu from '../Menu'
import styles from './GenreMenu.module.scss'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className={styles.wrapperPreloader}>
			<SkeletonLoader count={3} className="h-7 mt-6" />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Popular genres',
				items: data || [],
			}}
		/>
	)
}

export default GenreMenu
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<SkeletonLoader count={4} className={'h-7 pt-6 mb-6'} />
	) : (
		<Menu
			menu={{
				title: 'Popular genres',
				items: data || []
			}}
		/>
	)
}

export default GenreMenu

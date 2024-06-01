import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import styles from '../Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import { IMenuItem } from './MenuItem/menu-item.interface'
import { usePopularGenres } from './usePopularGenres'

const PopularGenres: FC = () => {
	const { isLoading, data: items } = usePopularGenres()

	return isLoading ? (
		<div className="w-4/5 mt-0 mr-auto mb-8 ml-auto">
			<SkeletonLoader count={4} className={'h-7 pt-6 mb-6'} />
		</div>
	) : (
		<div className={styles.menu}>
			<ul>
				{items?.map((item: IMenuItem) => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</div>
	)
}

export default PopularGenres

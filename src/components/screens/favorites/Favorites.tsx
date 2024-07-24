'use client'
import FavoriteBanner from '@/components/layout/Sidebars/RightSidebar/MoviesContainer/FavoriteMovies/FavoriteBanner/FavoriteBanner'
import stylesWrapper from '@/components/shared/contentWrapper.module.scss'
import { useAuth } from '@/hooks/useAuth'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import styles from './Favorites.module.scss'
import { IFavorites } from './favorites.interface'
import { useFavorites } from './useFavorites'

const Favorites: FC<IFavorites> = ({ device }) => {
	const { user } = useAuth()
	const { movies, isLoading } = useFavorites()
	const title = 'Favorites'

	return (
		<div className={stylesWrapper.contentWrapper}>
			<Heading title={title} />
			{user ? (
				isLoading ? (
					<>
						<SkeletonLoader
							count={9}
							className={styles.skeletonLoader}
							containerClassName={styles.containerLoader}
						/>
					</>
				) : movies?.length ? (
					<CatalogMovies movies={movies || []} device={device} />
				) : (
					<FavoriteBanner isAuth={true} />
				)
			) : (
				<FavoriteBanner isAuth={false} />
			)}
		</div>
	)
}

export default Favorites

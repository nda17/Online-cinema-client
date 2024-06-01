'use client'
import FavoriteBanner from '@/components/layout/Sidebars/RightSidebar/MoviesContainer/FavoriteMovies/FavoriteBanner/FavoriteBanner'
import stylesWrapper from '@/components/shared/contentWrapper.module.scss'
import { useAuth } from '@/hooks/useAuth'
import Description from '@/ui/description/Description'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { user } = useAuth()
	const { movies, isLoading } = useFavorites()

	const title = 'Favorites'
	const description =
		"Featured films page. No need to search for your favorite movie, you can immediately start watching it anytime, anywhere'"


	return (
		<div className={stylesWrapper.contentWrapper}>
			<Heading title={'Favorites'} />
			{user ? (
				isLoading ? (
					<>
						<Description
							text={description}
							className={styles.description}
						/>
						<SkeletonLoader
							count={9}
							className={styles.skeletonLoader}
							containerClassName={styles.containerLoader}
						/>
					</>
				) : (
					movies?.length ? <CatalogMovies
						movies={movies || []}
						title={''}
						description={''}
						favorite={true}
					/> : <FavoriteBanner isAuth={true} />
				)
			) : (
				<FavoriteBanner isAuth={false} />
			)}
		</div>
	)
}

export default Favorites

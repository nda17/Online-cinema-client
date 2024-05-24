'use client'
import Error404 from '@/app/not-found'
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
			{user ? (
				isLoading ? (
					<>
						<Heading title={'Favorites'} />
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
					<>
						<CatalogMovies
							movies={movies || []}
							title={title}
							description={description}
							favorite={true}
						/>
					</>
				)
			) : (
				<Error404 />
			)}
		</div>
	)
}

export default Favorites

'use client'
import stylesWrapper from '@/components/shared/contentWrapper.module.scss'
import Description from '@/ui/description/Description'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { movies, isLoading } = useFavorites()
	
	return (
		<div className={stylesWrapper.contentWrapper}>
			{isLoading ?
				(<>
					<Heading title={'Favorites'} />
					<Description text={'Featured films page. No need to search for your favorite movie, you can immediately start watching it anytime, anywhere'} className={styles.description} />
					<SkeletonLoader
							count={9}
							className={styles.skeletonLoader}
							containerClassName={styles.containerLoader}
					/>
				</>) 
				: (
					<>
						<Catalog
							movies={movies || []}
							title="Favorites"
							description="Featured films page. No need to search for your favorite movie, you can immediately start watching it anytime, anywhere'"
							favorite = {true}
						/>
					</>
				)
			}
		</div>
	)
}

export default Favorites

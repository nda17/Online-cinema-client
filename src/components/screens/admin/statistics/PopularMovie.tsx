'use client'
import { PUBLIC_URL } from '@/configs/url.config'
import { MovieService } from '@/services/movie/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import SubHeading from '@/ui/subheading/SubHeading'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0]
		}
	)

	return (
		<div className={classNames(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={PUBLIC_URL.moviesUrl(movie.slug)}>
							<Image
								width={285}
								height={176}
								style={{ width: 285, height: 176 }}
								src={movie.bigPoster}
								alt={movie.title}
								className={styles.img}
								priority={true}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie

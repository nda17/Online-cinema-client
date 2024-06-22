'use client'
import styles from '@/components/shared/contentWrapper.module.scss'
import LoadingPlaceholderRating from '@/screens/single-movie/StarRating/placeholder-screens/LoadingPlaceholder/LoadingPlaceholderRating'
import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import SubHeading from '@/ui/subheading/SubHeading'
import LoadingPlaceholder from '@/ui/video-player/placeholder-screens/LoadingPlaceholder/LoadingPlaceholder'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Content from './Content/Content'
import { ISingleMoviePage } from './single-movie.interface'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('@/ui/video-player/VideoPlayer'),
	{
		loading: () => <LoadingPlaceholder />,
		ssr: false
	}
)

const DynamicStarRating = dynamic(
	() => import('./StarRating/StarRating'),
	{
		loading: () => <LoadingPlaceholderRating />,
		ssr: false
	}
)

const SingleMovie: FC<ISingleMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)

	return (
		<div className={styles.contentWrapper}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer
				videoSource={movie.videoUrl}
				license={movie.license}
				slug={movie.slug}
			/>

			{similarMovies.length ? (
				<>
					<SubHeading title="Similar movies" />
					<Gallery items={similarMovies || []} />
				</>
			) : null}

			<SubHeading title="Film rating" />
			<DynamicStarRating
				count={5}
				icon={'MdStar'}
				defaultStarColor={{ color: '#4f4f4f' }}
				activeStarColor={{ color: '#ffd700' }}
				_id={movie._id}
			/>
		</div>
	)
}

export default SingleMovie

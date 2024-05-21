'use client'
import styles from '@/components/shared/contentWrapper.module.scss'
import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import SubHeading from '@/ui/subheading/SubHeading'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import Content from './Content/Content'
import { ISingleMoviePage } from './single-movie.interface'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('@/ui/video-player/VideoPlayer'),
	{
		ssr: false
	}
)

const DynamicStarRating = dynamic(
	() => import('./StarRating/StarRating'),
	{
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

			<SubHeading title="Similar movies" />
			<Gallery items={similarMovies || []} />

			<SubHeading title="Film rating" />
			<DynamicStarRating
				count={5}
				icon={'MdStar'}
				defaultStarColor={{ color: '#4f4f4f' }}
				activeStarColor={{ color: '#ffd700' }}
				slug={movie.slug}
				_id={movie._id}
			/>
		</div>
	)
}

export default SingleMovie

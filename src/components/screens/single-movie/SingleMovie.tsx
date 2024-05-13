'use client'
import styles from '@/components/shared/contentWrapper.module.scss'
import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import SubHeading from '@/ui/subheading/SubHeading'
import { FC } from 'react'
import Content from './Content/Content'
import { IMoviePage } from './single-movie.interface'

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<div className={styles.contentWrapper}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<>
				<SubHeading title="Similar movies" />
				<Gallery items={similarMovies || []} />
			</>
		</div>
	)
}

export default SingleMovie
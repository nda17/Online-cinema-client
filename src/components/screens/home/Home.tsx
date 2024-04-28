import styles from '@/components/shared/contentWrapper.module.scss'
import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'
import SubHeading from '@/ui/subheading/SubHeading'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = (content) => {
	const slides = content.slides
	const actors = content.actors
	const trendingMovies = content.trendingMovies

	return (
		<div className={styles.contentWrapper}>
			<Heading title="Watch movies online" />
			{content ? <Slider slides={slides} /> : null}

			<SubHeading title="Trending now" />
			{content ? <Gallery items={trendingMovies} /> : null}

			<SubHeading title="Best actors" />
			{content ? <Gallery items={actors} /> : null}
		</div>
	)
}

export default Home

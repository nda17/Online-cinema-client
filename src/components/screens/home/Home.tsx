import styles from '@/components/shared/contentWrapper.module.scss'
import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'
import SubHeading from '@/ui/subheading/SubHeading'
import { FC } from 'react'
import { IHomePage } from './home.interface'

const Home: FC<IHomePage> = ({ slidesMovies, popularMovies, actors, americanMovies }) => {
	return (
		<div className={styles.contentWrapper}>
			<Heading title="Watch movies online" />
			{slidesMovies ? <Slider slides={slidesMovies} /> : null}

			<SubHeading title="Trending now" />
			{popularMovies ? <Gallery items={popularMovies} /> : null}

			<SubHeading title="Best actors" />
			{actors ? <Gallery items={actors} /> : null}

			<SubHeading title="American blockbusters" />
			{americanMovies ? <Gallery items={americanMovies} /> : null}
		</div>
	)
}

export default Home

import styles from '@/components/shared/contentWrapper.module.scss'
import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'
import SubHeadingLink from '@/ui/subheading-link/SubHeadingLink'
import { FC } from 'react'
import { IHomePage } from './home.interface'

const Home: FC<IHomePage> = ({
	slidesMovies,
	popularMovies,
	actors,
	americanMovies,
	childrenMovies
}) => {
	return (
		<div className={styles.contentWrapper}>
			<Heading title="Watch movies online" />
			{slidesMovies ? <Slider slides={slidesMovies} /> : null}

			<SubHeadingLink title="Trending now" url={'/trending'} />
			{popularMovies ? <Gallery items={popularMovies} /> : null}

			<SubHeadingLink title="Best actors" url={'/actors'} />
			{actors ? <Gallery items={actors} /> : null}

			<SubHeadingLink
				title="American blockbusters"
				url={'/american-blockbusters'}
			/>
			{americanMovies ? <Gallery items={americanMovies} /> : null}

			<SubHeadingLink title="For children" url={'/for-children'} />
			{childrenMovies ? <Gallery items={childrenMovies} /> : null}
		</div>
	)
}

export default Home

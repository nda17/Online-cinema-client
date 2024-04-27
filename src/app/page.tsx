import { API_URL, PUBLIC_PATH } from '@/configs/api.config'
import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'
import { ISlide } from '@/ui/slider/slider.interface'
import { getGenresList } from '@/utils/movie/getGenresList'
import { getRandomItem } from '@/utils/object/getRandomItem'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home | Online-Cinema',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser.'
}

const HomePage = async () => {
	const { props: content } = await staticContent()
	return <Home {...content} />
}

export const staticContent = async () => {
	try {
		const data = await fetch(`${API_URL}${PUBLIC_PATH.moviesUrl(``)}`, {
			cache: 'force-cache'
		})
			.then((response) => response.json())
			.then((data) => data)

		const slides: ISlide[] = getRandomItem(data, 3).map((movie: any) => ({
			_id: movie._id,
			link: PUBLIC_PATH.moviesUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
			title: movie.title,
			bigPoster: movie.bigPoster
		}))

		return {
			props: {
				slides
			} as IHome
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: []
			} as IHome
		}
	}
}

export default HomePage

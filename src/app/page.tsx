import { API_URL } from '@/configs/api.config'
import { PUBLIC_URL } from '@/configs/url.config'
import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'
import { getGenresList } from '@/utils/movie/getGenresList'
import { getRandomItem } from '@/utils/object/getRandomItem'
import { errorCatch } from 'api/api.helpers'

const HomePage = async () => {
	const { props: content } = await staticContent()
	return <Home {...content} />
}

export const staticContent = async () => {
	try {
		//Movies slider fetch
		const dataMovies = await fetch(
			`${API_URL}${PUBLIC_URL.moviesUrl(``)}`,
			{
				cache: 'force-cache'
			}
		)
			.then((response) => response.json())
			.then((data) => data)

		const slides: ISlide[] = getRandomItem(dataMovies, 3).map(
			(movie: any) => ({
				_id: movie._id,
				link: PUBLIC_URL.moviesUrl(movie.slug),
				subTitle: getGenresList(movie.genres),
				title: movie.title,
				bigPoster: movie.bigPoster
			})
		)

		//Trending movies gallery fetch
		const dataTrendingMovies = await fetch(
			`${API_URL}${PUBLIC_URL.moviesUrl('most-popular')}`,
			{
				cache: 'force-cache'
			}
		)
			.then((response) => response.json())
			.then((data) => data)

		const trendingMovies: IGalleryItem[] = dataTrendingMovies.map(
			(movie: any) => ({
				name: movie.title,
				posterPath: movie.poster,
				url: PUBLIC_URL.moviesUrl(movie.slug)
			})
		)

		//Actors gallery fetch
		const dataActors = await fetch(
			`${API_URL}${PUBLIC_URL.actorsUrl(``)}`,
			{
				cache: 'force-cache'
			}
		)
			.then((response) => response.json())
			.then((data) => data)

		const actors: IGalleryItem[] = dataActors
			.slice(0, 8)
			.map((actor: any) => ({
				name: actor.name,
				posterPath: actor.photo,
				url: PUBLIC_URL.actorsUrl(actor.slug),
				content: {
					title: actor.name,
					subTitle: `+${actor.countMovies} movies`
				}
			}))

		return {
			props: {
				slides,
				trendingMovies,
				actors
			} as IHome
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
				trendingMovies: [],
				actors: []
			} as IHome
		}
	}
}

export default HomePage

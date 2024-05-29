import { PUBLIC_URL } from '@/configs/url.config'
import Home from '@/screens/home/Home'
import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'
import { IActor, IMovie } from '@/shared/types/movie.types'
import { getGenresList } from '@/utils/movie/getGenresList'
import { getRandomItem } from '@/utils/object/getRandomItem'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Watch movies | Online-Cinema',
	icons: {
		icon: '../../icon.ico'
	}
}

export const revalidate = 60

const HomePage = async () => {
	const data = await staticContent()

	const slidesMovies = data?.slidesMovies
	const popularMovies = data?.popularMovies
	const actors = data?.actors

	return (
		<Home
			slidesMovies={slidesMovies || []}
			popularMovies={popularMovies || []}
			actors={actors || []}
		/>
	)
}

const staticContent = async () => {
	try {
		//Movies for slider
		const { data: allMoviesList } = await MovieService.getMoviesList(``)

		const slidesMovies = getRandomItem(allMoviesList, 3).map((movie) => ({
			_id: movie._id,
			url: PUBLIC_URL.moviesUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
			title: movie.title,
			bigPoster: movie.bigPoster
		}))

		//Popular movies
		const { data: popularMoviesList } =
			await MovieService.getMostPopularMovies()

		const popularMovies = popularMoviesList.map((movie: IMovie) => ({
			name: movie.title,
			posterPath: movie.poster,
			url: PUBLIC_URL.moviesUrl(movie.slug)
		}))

		//Actors
		const { data: allActorsList } = await ActorService.getActorsList()

		const actors = getRandomItem(allActorsList, 8).map(
			(actor: IActor) => ({
				name: actor.name,
				posterPath: actor.photo,
				url: PUBLIC_URL.actorsUrl(actor.slug),
				content: {
					title: actor.name,
					subTitle: `+${actor.countMovies} movies`
				}
			})
		)

		return {
			slidesMovies,
			popularMovies,
			actors
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default HomePage

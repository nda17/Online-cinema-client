import Trending from '@/screens/trending/Trending'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Trending movies | Online-Cinema'
}

export const revalidate = 60

const TrendingPage = async () => {
	const data = await staticContent()

	const trendingMovies = data?.trendingMoviesList

	return trendingMovies ? (
		<Trending trendingMovies={trendingMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const { data: trendingMoviesList } =
			await MovieService.getMostPopularMovies()

		return {
			trendingMoviesList
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default TrendingPage

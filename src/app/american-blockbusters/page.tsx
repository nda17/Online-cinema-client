import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Error404 from '../not-found'
const DynamicAmericanMoviesPage = dynamic(
	() => import('@/screens/american/AmericanMoviesPage'),
	{ ssr: false }
)

export const metadata: Metadata = {
	title: 'American blockbusters | Online-Cinema'
}

export const revalidate = 60

const AmericanBlockbustersPage = async () => {
	const data = await staticContent()

	const americanMovies = data?.americanMovies

	return americanMovies ? (
		<DynamicAmericanMoviesPage americanMovies={americanMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const { data: allMoviesList } = await MovieService.getMoviesList(``)

		const americanMovies = allMoviesList.filter(
			(item) => item.parameters.country === 'USA'
		)

		return {
			americanMovies
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default AmericanBlockbustersPage

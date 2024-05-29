import Fresh from '@/screens/fresh/Fresh'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Fresh movies | Online-Cinema'
}

export const revalidate = 60

const FreshPage = async () => {
	const data = await staticContent()

	const freshMovies = data?.allMoviesList

	return freshMovies ? (
		<Fresh freshMovies={freshMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const { data: allMoviesList } = await MovieService.getMoviesList(``)

		return {
			allMoviesList
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default FreshPage

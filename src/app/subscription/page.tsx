import Subscription from '@/screens/subscription/Subscription'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Movies by subscription | Online-Cinema'
}

export const revalidate = 60

const BySubscriptionPage = async () => {
	const data = await staticContent()

	const subscriptionMovies = data?.subscriptionMovies

	return subscriptionMovies ? (
		<Subscription subscriptionMovies={subscriptionMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const { data: moviesList } = await MovieService.getMoviesList(``)

		const subscriptionMovies = moviesList.filter(
			(item) => item.license === 'subscription'
		)

		return {
			subscriptionMovies
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default BySubscriptionPage

import Subscription from '@/screens/subscription/Subscription'
import { MovieService } from '@/services/movie/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Movies by subscription | Online-Cinema'
}

const BySubscriptionPage = async () => {
	const data = await staticContent()

	const subscriptionMovies = data?.subscriptionMovies

	return subscriptionMovies ? (
		<Subscription subscriptionMovies={subscriptionMovies || []} />
	) : (
		<Error404 />
	)
}

//Movies by subscription fetch
export const staticContent = async () => {
	try {
		const response = await MovieService.getMoviesList()

		const subscriptionMovies: IMovie[] = response.data.filter(
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

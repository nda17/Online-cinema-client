import { MovieService } from '@/services/movie/movie.service'
import SpinnerLoader from '@/ui/spinner-loader/SpinnerLoader'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Error404 from '../not-found'
const DynamicChildrenMoviesPage = dynamic(
	() => import('@/screens/children/ChildrenMoviesPage'),
	{
		loading: () => <SpinnerLoader />,
		ssr: false
	}
)

export const metadata: Metadata = {
	title: 'For children | Online-Cinema'
}

export const revalidate = 60

const ForChildrenPage = async () => {
	const data = await staticContent()

	const childrenMovies = data?.childrenMovies

	return childrenMovies ? (
		<DynamicChildrenMoviesPage childrenMovies={childrenMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const { data: childrenMovies } = await MovieService.getByGenres([
			'662170715b5c6107dbf33895'
		])

		return {
			childrenMovies
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default ForChildrenPage

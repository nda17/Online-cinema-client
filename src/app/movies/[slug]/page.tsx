import Error404 from '@/app/not-found'
import { PUBLIC_PATH } from '@/configs/api.config'
import SingleMovie from '@/screens/single-movie/SingleMovie'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const generateMetadata = async ({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> => {
	const { data: movie } = await MovieService.getBySlug(params?.slug)

	return {
		title: `${movie.title} | Online-Cinema`,
		description: `Watch ${movie.title}`
	}
}

export const revalidate = 60

const MoviePage = async ({ params }: { params: { slug: string } }) => {
	const data = await staticContent(params)

	const movie = data?.movie
	const similarMovies = data?.similarMovies

	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async (params: { slug: string }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(params?.slug)

		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map((genre: { _id: string }) => genre._id)
		)

		const similarMovies = responseSimilarMovies.data
			.filter((item) => item._id !== movie._id)
			.map((item) => ({
				name: item.title,
				rating: movie.rating.toFixed(1),
				posterPath: item.poster,
				url: PUBLIC_PATH.moviesUrl(`/${item.slug}`)
			}))

		return {
			movie,
			similarMovies
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default MoviePage

import Error404 from '@/app/not-found'
import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { PUBLIC_PATH } from '@/configs/api.config'
import { MovieService } from '@/services/movie/movie.service'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const generateMetadata = async ({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> => {
	const { data: movie } = await MovieService.getBySlug(
		String(params?.slug)
	)

	return {
		title: `${movie.title} | Online-Cinema`,
		description: `Watch ${movie.title}`,

	}
}

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

//Movie fetch
export const staticContent = async (params: any) => {
	try {
		const { data: movie } = await MovieService.getBySlug(
			String(params?.slug)
		)

		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map((genre: any) => genre._id)
		)

		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
			.filter((item) => item._id !== movie._id)
			.map((item) => ({
				name: item.title,
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

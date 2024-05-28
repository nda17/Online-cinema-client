import Error404 from '@/app/not-found'
import Genre from '@/screens/genres/Genre'
import { GenreService } from '@/services/genre/genre.service'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const generateMetadata = async ({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> => {
	const { data: genre } = await GenreService.getGenreBySlug(
		String(params?.slug)
	)

	return {
		title: `${genre.name} | Online-Cinema`
	}
}

const GenrePage = async ({ params }: { params: { slug: string } }) => {
	const data = await staticContent(params)

	const genre = data?.genre
	const movies = data?.movies

	return genre ? <Genre genre={genre} movies={movies} /> : <Error404 />
}

const staticContent = async (params: { slug: string }) => {
	try {
		const { data: genre } = await GenreService.getGenreBySlug(params.slug)
		const { data: movies } = await MovieService.getByGenres([genre._id])

		return {
			movies,
			genre
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default GenrePage
